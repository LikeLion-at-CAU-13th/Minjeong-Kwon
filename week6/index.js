const baseURL = "http://apis.data.go.kr/B551011/PhotoGalleryService1";

const option = {
    serviceKey:
      "JHfZ5NQKJxAjfUkycSNlpR3Pi8TIrwjFrApko8nDnbul4X%2FRjsvIEXIwBhePNbmdaUDcQV5DjhP1UxztUvx88g%3D%3D",
    numofRows: 6, //6개만 받아옴
    MobileApp: "test",
    MobileOS: "ETC",
    arrange: "A",
    _type: "json",
  };

  const container = document.getElementById('container');

  let imgCount = 1;

  async function getData() {
      let count = Math.floor(Math.random() * 1000) + 1;; //데이터를 랜덤으로 뽑아오기
      const url = `${baseURL}/galleryList1?numOfRows=${option.numofRows}&MobileApp=${option.MobileApp}&MobileOS=${option.MobileOS}&arrange=${option.arrange}&_type=${option._type}&pageNo=${count}&serviceKey=${option.serviceKey}`;

     const fetchData = await fetch(url);
    //  console.log(fetchData);

     const toJson = await fetchData.json();
    //  console.log(toJson);

     const datas = await toJson.response.body.items.item;
     console.log(datas);

     datas.map((data, i)=>{
        const list = document.createElement('div');
        list.id = 'list';

        const image = document.createElement('img');
        image.src = data.galWebImageUrl;

        const info = document.createElement('span');
        info.innerText = `
        ${imgCount++}번째 사진
        🏷️ 제목 : ${data.galTitle};
        🖼️ 장소 : ${data.galPhotographyLocation};
        `

        list.appendChild(image);
        list.appendChild(info);

        container.appendChild(list);

        const button = document.createElement('button');
        button.innerText = "더보기";
        list.appendChild(button);

        button.addEventListener('click', () => {
         // 정보 전달은 보통 query string 또는 localStorage로
         const query = new URLSearchParams({
           title: data.galTitle,
           location: data.galPhotographyLocation,
           imageUrl: data.galWebImageUrl,
         }).toString();
         window.location.href = `detail.html?${query}`;
       });
   
     })  

  }

  

