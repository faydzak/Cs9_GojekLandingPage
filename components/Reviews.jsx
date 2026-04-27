export default function Reviews() {
  const reviews = [
    {
      name: "Subaru natsuki.",
      role: "Daily Commuter",
      content: "Gofast has completely changed my morning routine. The drivers are always fast, and the app never glitches when I need it most.",
      rating: 5,
    },
    {
      name: "Phainon",
      role: "Foodie",
      content: "I use Gofast Food almost every day. The delivery fees are completely transparent and the food always arrives hot. Best super-app out there.",
      rating: 5,
    },
    {
      name: "Jotaro",
      role: "Small Business Owner",
      content: "Gofast Send has been a lifesaver for my business. Reliable couriers and the tracking feature gives my customers peace of mind.",
      rating: 4,
    }
  ];

  return (
    <section className="py-20 bg-gray-50 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4 text-gray-900">Loved by our users</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Dont just take our word for it. Here is what the Gofast community has to say.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <div key={index} className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 flex flex-col justify-between hover:shadow-md transition duration-300">
              <div>
                <div className="flex text-yellow-400 mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                      <path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-700 italic mb-6 leading-relaxed">{review.content}</p>
              </div>
              <div className="flex items-center mt-auto pt-4 border-t border-gray-50">
                <div className="w-10 h-10 bg-green-100 text-[#00aa5b] font-bold rounded-full flex items-center justify-center mr-4 shrink-0">
                  {review.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">{review.name}</h4>
                  <p className="text-sm text-gray-500">{review.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}