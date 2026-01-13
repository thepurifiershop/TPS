// Fetch the JSON data
fetch('products.json')
    .then(response => response.json())
    .then(products => {
        const container = document.getElementById('product-container');
        container.innerHTML = ''; // Clear loading text

        products.forEach(product => {
            // Generate Pros List HTML
            const prosHtml = product.pros.map(pro => 
                `<li class="flex items-start"><span class="text-green-500 mr-2">✓</span> ${pro}</li>`
            ).join('');

            // Generate Cons List HTML
            const consHtml = product.cons.map(con => 
                `<li class="flex items-start"><span class="text-red-500 mr-2">✗</span> ${con}</li>`
            ).join('');

            // Create Product Card HTML
            const card = `
                <div class="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200">
                    <div class="md:flex">
                        
                        <div class="md:w-1/3 bg-gray-50 p-6 flex items-center justify-center relative">
                            ${product.badge ? `<span class="absolute top-4 left-4 bg-blue-600 text-white text-xs font-bold px-2 py-1 rounded uppercase tracking-wide">${product.badge}</span>` : ''}
                            <img src="${product.image}" alt="${product.name}" class="max-h-48 object-contain mix-blend-multiply">
                        </div>

                        <div class="md:w-2/3 p-6">
                            <div class="flex justify-between items-start">
                                <div>
                                    <p class="text-sm text-gray-500 font-semibold uppercase">${product.category}</p>
                                    <h3 class="text-xl font-bold text-gray-900 mt-1">${product.name}</h3>
                                </div>
                                <div class="text-right">
                                    <span class="block text-lg font-bold text-gray-900">${product.price}</span>
                                    <span class="text-yellow-500 text-sm">★ ${product.rating}/5</span>
                                </div>
                            </div>

                            <p class="mt-4 text-gray-600 text-sm leading-relaxed">${product.summary}</p>

                            <div class="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                                <div>
                                    <strong class="block text-gray-900 mb-1">Why we like it:</strong>
                                    <ul class="space-y-1 text-gray-600">${prosHtml}</ul>
                                </div>
                                <div class="sm:border-l sm:pl-4">
                                    <strong class="block text-gray-900 mb-1">Flaws:</strong>
                                    <ul class="space-y-1 text-gray-600">${consHtml}</ul>
                                </div>
                            </div>

                            <div class="mt-6">
                                <a href="${product.affiliate_link}" target="_blank" 
                                   class="inline-block w-full text-center bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-4 rounded transition duration-200">
                                   Check Price on Amazon
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            `;
            
            // Add to page
            container.innerHTML += card;
        });
    })
    .catch(error => console.error('Error loading products:', error));
