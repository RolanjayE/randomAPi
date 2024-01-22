
document.addEventListener('DOMContentLoaded', function() {
    // Add cards to the container
    dataFeatch()

});


const containers = document.getElementById('containers');

const createCardUi = (data) => {

    return `
    <div class="cardss">
        <div class="img-con">
            <img src="./myimg.jpg" alt="">
        </div>
        <div class="content">
            <p class="title">${data.title}</p>
            <p class="paragrapth">${data.content}</p>
        </div>
    </div>`;

};


const dataFeatch = ()=> {
    
    const newsData = {
        news: [
            {
                title: 'title1',
                images: 'images1',
                content: 'loewmas asidjas; kjisklfn okajsumfijsdf jisadhasnkjniuahfjsn asoihduah'
            },
            {
                title: 'title2',
                images: 'images2',
                content: 'loewmas asidjas; kjisklfn okajsumfijsdf jisadhasnkjniuahfjsn asoihduah'
            },
            {
                title: 'title3',
                images: 'images3',
                content: 'loewmas asidjas; kjisklfn okajsumfijsdf jisadhasnkjniuahfjsn asoihduah'
            }
        ]
    };

    newsData.news.forEach(element => {
        const card = createCardUi(element);
        containers.innerHTML += card;
    });


}
    