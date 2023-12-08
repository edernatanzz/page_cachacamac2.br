
        
    
        const products = [
            {
             /* 1*/
                title: 'Série Ouro – Prime',
                subtitle: 'Envelhecida em barril de Umburana e Carvalho.',
                imageSubtitle: '750 ml – 38% Vol.',
                price: 125.00,
                image: 'imgs/serie ouro prime.PNG',
                description: 'Caixa com 6 unidades – R$540,00.',
                whatsappLink: 'https://wa.me/7799899478?text=Ol%C3%A1%2C%20quero%20comprar%20o%20Produto%201!'
            },
            {
               /*2*/
                title: 'Série Ouro - Prime',
                subtitle: 'Envelhecida em barril de Umburana e Carvalho.',
                imageSubtitle: '750 ml – 38% Vol.',
                price: 125.00,
                image: 'imgs/slider-principal/garrafas/2-serie ouro prime.webp',
                description: 'Caixa com 9 unidades – R$810,00.',
                whatsappLink: 'https://wa.me/7799899478?text=Ol%C3%A1%2C%20quero%20comprar%20o%20Produto%201!'
            },

            {
                /*3 */
                title: 'Série Ouro',
                subtitle: 'Envelhecida em barril de Umburana e Carvalho.',
                imageSubtitle: '750 ml – 38% Vol.',
                price: 40.00,
                image: 'imgs/slider-principal/garrafas/03-serie ouro.webp',
                description: 'Caixa com 12 unidades – R$340,00.',
                whatsappLink: 'https://wa.me/7799899478?text=Ol%C3%A1%2C%20quero%20comprar%20o%20Produto%202!'
            },
            {
               /* 4*/
                title: 'Série Prata',
                subtitle: 'Envelhecida em barril de Umburana e Carvalho.',
                imageSubtitle: '750 ml – 38% Vol.',
                price: 34.00,
                image: 'imgs/slider-principal/garrafas/04-serie prata.webp',
                description: 'Caixa com 12 unidades – R$340.00.',
                whatsappLink: 'https://wa.me/7799899478?text=Ol%C3%A1%2C%20quero%20comprar%20o%20Produto%203!'
            },
            {
                /*5 */
                title: 'Série Ouro ',
                subtitle: 'Envelhecida em barril de Umburana e Carvalho.',
                imageSubtitle: '250 ml – 38% Vol.',
                price: 16.00,
                image: 'imgs/slider-principal/garrafas/05-serie ouro.webp',
                description: 'Caixa com 12 unidades – R$160,00.',
                whatsappLink: 'https://wa.me/7799899478?text=Ol%C3%A1%2C%20quero%20comprar%20o%20Produto%204!'
            },
            {
                /*06 */
                title: 'Série Prata',
                subtitle: 'Envelhecida em barril de Umburana e Carvalho.',
                imageSubtitle: '250 ml – 38% Vol.',
                price: 14.00,
                image: 'imgs/slider-principal/garrafas/06-serie prata.webp',
                description: 'Caixa com 12 unidades – R$140,00.',
                whatsappLink: 'https://wa.me/7799899478?text=Ol%C3%A1%2C%20quero%20comprar%20o%20Produto%205!'
            },

            
            // Adicione mais produtos conforme necessário
        ];
        
        const productsList = document.getElementById('products-list');
        
        products.forEach(product => {
            const productDiv = document.createElement('div');
            productDiv.classList.add('product');
            
            const productImageContainer = document.createElement('div');
            productImageContainer.classList.add('product-image-container');
            
            const productImage = document.createElement('img');
            productImage.src = product.image;
            
            const productImageSubtitle = document.createElement('div');
            productImageSubtitle.classList.add('product-image-subtitle');
            productImageSubtitle.textContent = product.imageSubtitle;
            
            productImageContainer.appendChild(productImage);
            productImageContainer.appendChild(productImageSubtitle);
            
            const productTitle = document.createElement('div');
            productTitle.classList.add('product-title');
            productTitle.textContent = product.title;
            
            const productSubtitle = document.createElement('div');
            productSubtitle.classList.add('product-subtitle');
            productSubtitle.textContent = product.subtitle;
            
            const productPrice = document.createElement('div');
            productPrice.classList.add('product-price');
            productPrice.textContent = `R$ ${product.price.toFixed(2)}`;
            
            const productDescription = document.createElement('div');
            productDescription.classList.add('product-description');
            productDescription.textContent = product.description;
            
            const buyButton = document.createElement('a');
            buyButton.classList.add('buy-button');
            buyButton.href = product.whatsappLink;
            buyButton.textContent = 'Comprar no WhatsApp';
            
            productDiv.appendChild(productImageContainer);
            productDiv.appendChild(productTitle);
            productDiv.appendChild(productSubtitle);
            productDiv.appendChild(productPrice);
            productDiv.appendChild(productDescription);
            productDiv.appendChild(buyButton);
            
            productsList.appendChild(productDiv);
        });
        
/* nav bar */

const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');

navToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

/* SLIDER PRINCIPAL */


$('.slider-principal').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    adaptiveHeight: true,
    autoplay:true,
    autoplaySpeed: 2000
  });
  