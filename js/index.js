window.addEventListener("DOMContentLoaded", function() {

    /* Sviper Slider */
    const swiper = new Swiper('.swiper', {
        /* loop: true, */
        autoplay: true,
        speed: 1000,
        virtual: {
            enabled: true,
        },
        slidesPerView: 10,
        spaceBetween: 0,
        freeMode: true,
    });

    /* Collection View More */
    const btnViewAllCollection = document.querySelector('.collections-btn');
    const collectionCards = Array.from(document.querySelectorAll('.collections-item'));

    window.addEventListener('resize', event => {
        if (event.target.window.innerWidth > 1300) responseNft();
        if (event.target.window.innerWidth <= 1024 && event.target.window.innerWidth > 724) responseNft2();
        if (event.target.window.innerWidth < 768) responseNft3();

        if (event.target.window.innerWidth > 1300) responseCollection();
        if (event.target.window.innerWidth <= 1024 && event.target.window.innerWidth > 724) responseCollection2();
        if (event.target.window.innerWidth < 768) responseCollection3();
    })

    function openCatalog() {
        btnViewAllCollection.addEventListener('click', () => {
            collectionCards.forEach(item => item.classList.remove('hidden'));
            btnViewAllCollection.classList.add('hidden');
        })
    }

    function responseCollection() {
        if (window.innerWidth > 1300) {
            btnViewAllCollection.classList.add('hidden');
            
            collectionCards.forEach((item, index) => {
                item.classList.add('hidden')
                if (index < 3) {
                    item.classList.remove('hidden')
                } else if (index > 1) {
                    btnViewAllCollection.classList.remove('hidden');
                }
                openCatalog()
            })
        }
    }

    responseCollection()

    function responseCollection2() {
        if (window.innerWidth <= 1024 && window.innerHeight > 768) {
            btnViewAllCollection.classList.add('hidden');
            
            collectionCards.forEach((item, index) => {
                item.classList.add('hidden')
                if (index < 4) {
                    item.classList.remove('hidden')
                } else if (index > 1) {
                    btnViewAllCollection.classList.remove('hidden');
                }
                openCatalogNft()
            })
        }
    }

    responseCollection2()

    function responseCollection3() {
        if (window.innerWidth < 768) {
            btnViewAllCollection.classList.add('hidden');
            
            collectionCards.forEach((item, index) => {
                item.classList.add('hidden')
                if (index < 2) {
                    item.classList.remove('hidden')
                } else if (index > 1) {
                    btnViewAllCollection.classList.remove('hidden');
                }
                openCatalogNft()
            })
        }
    }

    responseCollection3()

    /* NFT View More */
    const btnViewAllNft = this.document.querySelector('.nft-btn')
    const nftCards = Array.from(document.querySelectorAll('.nft-item'));

    function openCatalogNft() {
        btnViewAllNft.addEventListener('click', () => {
            nftCards.forEach(item => item.classList.remove('hidden'));
            btnViewAllNft.classList.add('hidden');
        })
    }

    function responseNft() {
        if (window.innerWidth > 1300) {
            btnViewAllNft.classList.add('hidden');
            
            nftCards.forEach((item, index) => {
                item.classList.add('hidden')
                if (index < 6) {
                    item.classList.remove('hidden')
                } else if (index > 1) {
                    btnViewAllNft.classList.remove('hidden');
                }
                openCatalogNft()
            })
        }
    }

    responseNft()

    function responseNft2() {
        if (window.innerWidth <= 1024 && window.innerHeight > 768) {
            btnViewAllNft.classList.add('hidden');
            
            nftCards.forEach((item, index) => {
                item.classList.add('hidden')
                if (index < 4) {
                    item.classList.remove('hidden')
                } else if (index > 1) {
                    btnViewAllNft.classList.remove('hidden');
                }
                openCatalogNft()
            })
        }
    }

    responseNft2()

    function responseNft3() {
        if (window.innerWidth < 768) {
            btnViewAllNft.classList.add('hidden');
            
            nftCards.forEach((item, index) => {
                item.classList.add('hidden')
                if (index < 2) {
                    item.classList.remove('hidden')
                } else if (index > 1) {
                    btnViewAllNft.classList.remove('hidden');
                }
                openCatalogNft()
            })
        }
    }

    responseNft3()

})