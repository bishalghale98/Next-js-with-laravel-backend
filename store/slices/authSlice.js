// store/authSlice.js
import api from "@/lib/axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "sonner";

// ========== Thunks ==========
export const fetchUser = createAsyncThunk(
  "auth/fetchUser",
  async (_, { rejectWithValue }) => {
    try {
      const res = await api.get("/api/user");
      return res.data.user;
    } catch (err) {
      return rejectWithValue(err.response?.data || "Unable to fetch user");
    }
  }
);

export const loginUser = createAsyncThunk(
  "auth/loginUser",
  async ({ email, password }, { rejectWithValue }) => {
    try {
      const res = await api.post("/api/auth/login", { email, password });
      if (typeof window !== "undefined") {
        localStorage.setItem("token", res.data.token);
      }
      toast.success(`Welcome back, ${res.data.user.name}`);
      return res.data.user;
    } catch (err) {
      toast.error(err.response?.data?.message || "Login failed");
      return rejectWithValue(err.response?.data || err);
    }
  }
);

export const logoutUser = createAsyncThunk(
  "auth/logoutUser",
  async (_, { rejectWithValue }) => {
    try {
      await api.post("/api/auth/logout");
      if (typeof window !== "undefined") {
        localStorage.removeItem("token");
      }
      toast.success("Logged out");
    } catch (err) {
      return rejectWithValue(err.response?.data || "Logout failed");
    }
  }
);

// Register user
export const registerUser = createAsyncThunk(
  "auth/registerUser",
  async (
    { name, email, password, password_confirmation },
    { rejectWithValue }
  ) => {
    try {
      const res = await api.post("/api/auth/register", {
        name,
        email,
        password,
        password_confirmation,
      });
      toast.success(
        `Account created successfully! Welcome, ${res.data.user.name}`
      );
      return res.data.user;
    } catch (err) {
      toast.error(err.response?.data?.message || "Registration failed");
      return rejectWithValue(err.response?.data || err);
    }
  }
);

// Forgot Password
export const forgetPassword = createAsyncThunk(
  "auth/forgetPassword",
  async ({ email }, { rejectWithValue }) => {
    try {
      await api.post("/api/auth/forgot-password", { email });
    } catch (error) {
      console.log("Error : ", error.message);
      toast.error("Something went wrong");
    }
  }
);

// Reset password
export const resetPassword = createAsyncThunk(
  "auth/resetPassword",
  async ({ token, password, password_confirmation }, { rejectWithValue }) => {
    try {
      const res = await api.post("/api/auth/reset-password", {
        token,
        password,
        password_confirmation,
      });

      toast.success("Password reset successfully!");
      return res.data.message;
    } catch (error) {
      console.log("Error : ", error);
    }
  }
);

export const verificationNotification = createAsyncThunk(
  "auth/verificationNotification",
  async ({ email }, { rejectWithValue }) => {
    try {
      const res = await api.post("/api/auth/email/verification-notification", {
        email,
      });
      return res.data.message;
    } catch (error) {
      console.log("Error : ", error);
    }
  }
);

// ========== Slice ==========
const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: null,
    isAuthenticated: false,
    loading: true,
    error: null,
    message: null,
  },
  reducers: {
    resetAuthState: (state) => {
      state.user = null;
      state.isAuthenticated = false;
      state.loading = false;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      // Fetch user
      .addCase(fetchUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isAuthenticated = !!action.payload;
        state.loading = false;
      })
      .addCase(fetchUser.rejected, (state, action) => {
        state.user = null;
        state.isAuthenticated = false;
        state.loading = false;
        state.error = action.payload;
      })

      // Login
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isAuthenticated = true;
        state.loading = false;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.user = null;
        state.isAuthenticated = false;
        state.loading = false;
        state.error = action.payload;
      })

      // Logout
      .addCase(logoutUser.fulfilled, (state) => {
        state.user = null;
        state.isAuthenticated = false;
        state.loading = false;
      })
      .addCase(logoutUser.rejected, (state, action) => {
        state.error = action.payload;
      })

      // Register User
      .addCase(registerUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.loading = false;
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.user = null;
        state.loading = false;
        state.error = action.payload;
      })

      // Forget Password
      .addCase(forgetPassword.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(forgetPassword.fulfilled, (state, action) => {
        state.loading = false;
      })
      .addCase(forgetPassword.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // reset password
      .addCase(resetPassword.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(resetPassword.fulfilled, (state, action) => {
        state.loading = false;
      })
      .addCase(resetPassword.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // verification send
      .addCase(verificationNotification.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(verificationNotification.fulfilled, (state, action) => {
        state.loading = false;
        state.message = "Verification email sent! Please check your inbox.";
      })
      .addCase(verificationNotification.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
        state.message = "Failed to send verification email. Please try again.";
      });
  },
});

export const { resetAuthState } = authSlice.actions;
export default authSlice.reducer;
