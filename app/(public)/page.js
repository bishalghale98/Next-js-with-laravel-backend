import Link from "next/link";

export default function Home() {
  const features = [
    {
      title: "Fast & Reliable",
      description: "Lightning-fast performance with 99.9% uptime guarantee",
      icon: "⚡",
    },
    {
      title: "Secure & Safe",
      description: "Enterprise-grade security to protect your data",
      icon: "🔒",
    },
    {
      title: "Easy to Use",
      description: "Intuitive interface that anyone can master quickly",
      icon: "🎯",
    },
    {
      title: "24/7 Support",
      description: "Round-the-clock customer support team",
      icon: "🛟",
    },
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Marketing Director",
      content: "This platform transformed our workflow. Highly recommended!",
      avatar: "👩‍💼",
    },
    {
      name: "Mike Chen",
      role: "Startup Founder",
      content: "The best decision we made for our business growth.",
      avatar: "👨‍💼",
    },
    {
      name: "Emily Davis",
      role: "Product Manager",
      content: "Incredible features and even better customer support.",
      avatar: "👩‍🎨",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 ">
      {/* Hero Section */}
      <section className="relative bg-white overflow-hidden ">
        <div className="max-w-7xl mx-auto ">
          <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
            <div className="pt-10 mx-auto max-w-7xl px-4 sm:pt-12 sm:px-6 md:pt-16 lg:pt-20 lg:px-8 xl:pt-28">
              <div className="sm:text-center lg:text-left">
                <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                  <span className="block">Welcome to</span>
                  <span className="block text-blue-600">Logoipsum</span>
                </h1>
                <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                  Transform your business with our powerful platform. Get
                  started today and experience the difference that quality
                  makes.
                </p>
                <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                  <div className="rounded-md shadow">
                    <Link
                      href="/register"
                      className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 md:py-4 md:text-lg md:px-10 transition-colors duration-200"
                    >
                      Get Started
                    </Link>
                  </div>
                  <div className="mt-3 sm:mt-0 sm:ml-3">
                    <Link
                      href="/demo"
                      className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-blue-700 bg-blue-100 hover:bg-blue-200 md:py-4 md:text-lg md:px-10 transition-colors duration-200"
                    >
                      Live Demo
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:absolute lg:inset-y-0 m-5  lg:right-0 lg:w-1/2">
          <div className="h-56 w-full bg-gradient-to-r from-blue-400 to-blue-600 sm:h-72 md:h-96 lg:w-full lg:h-full flex items-center justify-center">
            <div className="relative w-4/5 h-4/5 bg-white/20  rounded-2xl backdrop-blur-sm border border-white/30 p-8">
              <div className="text-white text-center">
                <div className="text-6xl mb-4">🚀</div>
                <h3 className="text-2xl font-bold mb-2">Amazing Platform</h3>
                <p className="text-blue-100">Your success starts here</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 bg-white sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Why Choose Us?
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Discover the features that make us different
            </p>
          </div>

          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feature, index) => (
              <div
                key={index}
                className="relative bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300"
              >
                <div className="text-3xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-blue-600 py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-8 text-center md:grid-cols-4">
            <div>
              <p className="text-4xl font-extrabold text-white sm:text-5xl">
                10K+
              </p>
              <p className="mt-2 text-sm font-medium text-blue-200">
                Happy Customers
              </p>
            </div>
            <div>
              <p className="text-4xl font-extrabold text-white sm:text-5xl">
                99.9%
              </p>
              <p className="mt-2 text-sm font-medium text-blue-200">Uptime</p>
            </div>
            <div>
              <p className="text-4xl font-extrabold text-white sm:text-5xl">
                24/7
              </p>
              <p className="mt-2 text-sm font-medium text-blue-200">Support</p>
            </div>
            <div>
              <p className="text-4xl font-extrabold text-white sm:text-5xl">
                50+
              </p>
              <p className="mt-2 text-sm font-medium text-blue-200">
                Countries
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-12 bg-gray-50 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              What Our Customers Say
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Don't just take our word for it
            </p>
          </div>

          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300"
              >
                <div className="flex items-center mb-4">
                  <div className="text-2xl mr-4">{testimonial.avatar}</div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-600 italic">"{testimonial.content}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-white py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl shadow-xl overflow-hidden">
            <div className="px-6 py-12 sm:px-12 sm:py-16 lg:py-20 lg:px-16">
              <div className="lg:flex lg:items-center lg:justify-between">
                <div className="lg:w-0 lg:flex-1">
                  <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
                    Ready to get started?
                  </h2>
                  <p className="mt-4 max-w-3xl text-lg text-blue-100">
                    Join thousands of satisfied customers today. Start your free
                    trial now.
                  </p>
                </div>
                <div className="mt-8 lg:mt-0 lg:ml-8">
                  <Link
                    href="/register"
                    className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-blue-700 bg-white hover:bg-blue-50 shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105"
                  >
                    Start Free Trial
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
