let lastScroll = 0;
const header = document.getElementById('main-header');

window.addEventListener('scroll', () => {
  const currentScroll = window.pageYOffset;
  if (currentScroll <= 0) {
    header.style.transform = 'translateY(0)';
    return;
  }
  if (currentScroll > lastScroll) {
    
    header.style.transform = 'translateY(-140%)';
  } else {
   
    header.style.transform = 'translateY(0)';
  }
  lastScroll = currentScroll;
}); 


//<div data-w-id="83954a31-6c48-41c5-e145-afafc08539a3" data-is-ix2-target="1" class="lottie-animation-241" data-animation-type="lottie" data-src="https://cdn.prod.website-files.com/5e8b3356a5a8f5321855bbe7/6660607f8bcabed222fdd6d7_arrow-34.lottie" data-loop="0" data-direction="1" data-autoplay="0" data-renderer="svg" data-default-duration="1.3513512963096859" data-duration="1.6"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 154 98" width="154" height="98" preserveAspectRatio="xMidYMid meet" style="width: 8%; height: 100%; transform: translate3d(0px, 0px, 0px); content-visibility: visible;"><defs><clipPath id="__lottie_element_82"><rect width="154" height="98" x="0" y="0"></rect></clipPath></defs><g clip-path="url(#__lottie_element_82)"><g transform="matrix(1,0,0,1,0,0)" opacity="1" style="display: block;"><g opacity="1" transform="matrix(1,0,0,1,153.99000549316406,104.01300048828125)"><path stroke-linecap="round" stroke-linejoin="round" fill-opacity="0" stroke="rgb(188,188,188)" stroke-opacity="1" stroke-width="2" d=" M-5.864999771118164,-10.262999534606934 C-6.989999771118164,-47.01300048828125 -33.90399932861328,-62.590999603271484 -48.8849983215332,-55.926998138427734 C-63.86600112915039,-49.26300048828125 -53.426998138427734,-35.27799987792969 -48.382999420166016,-44.428001403808594 C-28.489999771118164,-80.51300048828125 -66.1760025024414,-88.20700073242188 -77.41899871826172,-84.83399963378906 C-100.99099731445312,-77.76300048828125 -81.24099731445312,-59.76300048828125 -78.47799682617188,-72.63400268554688 C-70.45500183105469,-110.00499725341797 -144.99000549316406,-105.88800048828125 -152.49000549316406,-94.26000213623047"></path></g><g opacity="1" transform="matrix(-0.144938662648201,0.5409184694290161,-0.5409184694290161,-0.144938662648201,291.94085693359375,-43.37336730957031)"><path stroke-linecap="butt" stroke-linejoin="miter" fill-opacity="0" stroke-miterlimit="4" stroke="rgb(188,188,188)" stroke-opacity="1" stroke-width="4" d=" M289.2179870605469,175.42599487304688 C290.60198974609375,176.41400146484375 303.6260070800781,183.80099487304688 308.7439880371094,182.52200317382812 C308.2439880371094,182.77200317382812 302.7950134277344,189.85800170898438 301.0450134277344,198.48300170898438"></path></g></g></g></svg></div>

// <div data-w-id="83954a31-6c48-41c5-e145-afafc085397e" data-is-ix2-target="1" class="text-lottie-anim crown-up-right crown-up-right-7" data-animation-type="lottie" data-src="https://cdn.prod.website-files.com/5e8b3356a5a8f5321855bbe7/63e0e73f81d6520742db5539_img-7.json" data-loop="0" data-direction="1" data-autoplay="0" data-renderer="svg" data-duration="1.6"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 23 24" width="23" height="24" preserveAspectRatio="xMidYMid meet" style="width: 2%; height: 100%; transform: translate3d(0px, 0px, 0px); content-visibility: visible;"><defs><clipPath id="__lottie_element_20"><rect width="23" height="24" x="0" y="0"></rect></clipPath></defs><g clip-path="url(#__lottie_element_20)"><g transform="matrix(1,0,0,1,11.965999603271484,11.407999992370605)" opacity="1" style="display: block;"><g opacity="1" transform="matrix(1,0,0,1,0,0)"><path stroke-linecap="round" stroke-linejoin="miter" fill-opacity="0" stroke-miterlimit="4" stroke="rgb(255,142,94)" stroke-opacity="1" stroke-width="2" d=" M-10.553000450134277,-7.8460001945495605 C-10.553000450134277,-7.8460001945495605 -9.251999855041504,-0.6869999766349792 -9.251999855041504,-0.6869999766349792 C-9.251999855041504,-0.6869999766349792 -0.7139999866485596,-9.633000373840332 -0.7139999866485596,-9.633000373840332 C-0.7139999866485596,-9.633000373840332 -4.169000148773193,0.4440000057220459 -4.169000148773193,0.4440000057220459 C-4.169000148773193,0.4440000057220459 8.819000244140625,-1.9140000343322754 8.819000244140625,-1.9140000343322754 C8.819000244140625,-1.9140000343322754 -1.1890000104904175,5.656000137329102 -1.1890000104904175,5.656000137329102 C-1.1890000104904175,5.656000137329102 10.553000450134277,7.631999969482422 10.553000450134277,7.631999969482422 C10.553000450134277,7.631999969482422 -0.46700000762939453,9.633000373840332 -0.46700000762939453,9.633000373840332"></path></g></g></g></svg></div>
  

//<div data-w-id="83954a31-6c48-41c5-e145-afafc08539b1" data-is-ix2-target="1" class="text-lottie-anim line-left-up" data-animation-type="lottie" data-src="https://cdn.prod.website-files.com/5e8b3356a5a8f5321855bbe7/63f374c38a2d4727d9c2b3ef_13-ux-ui.json" data-loop="0" data-direction="1" data-autoplay="0" data-renderer="svg" data-duration="1.6"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 75 38" width="75" height="38" preserveAspectRatio="xMidYMid meet" style="width: 6%; height: 100%; transform: translate3d(0px, 0px, 0px); content-visibility: visible;"><defs><clipPath id="__lottie_element_24"><rect width="75" height="38" x="0" y="0"></rect></clipPath></defs><g clip-path="url(#__lottie_element_24)"><g transform="matrix(1,0,0,1,37.5,18.993999481201172)" opacity="1" style="display: block;"><g opacity="1" transform="matrix(1,0,0,1,0,0)"><path stroke-linecap="round" stroke-linejoin="miter" fill-opacity="0" stroke-miterlimit="4" stroke="rgb(255,142,94)" stroke-opacity="1" stroke-width="1.5" d=" M-13.885000228881836,-15.5 C-23.195999145507812,-14.418999671936035 -53.79100036621094,16.20800018310547 -18.20800018310547,15.487000465393066 C10.258000373840332,14.91100025177002 29.125,13.5649995803833 35,12.96500015258789"></path></g></g></g></svg></div>


//       <span data-w-id="83954a31-6c48-41c5-e145-afafc08539b7" data-is-ix2-target="1" class="text-lottie-anim line line--h2" data-animation-type="lottie" data-src="https://cdn.prod.website-files.com/5e8b3356a5a8f5321855bbe7/644024b869f117db009edd24_line-01.lottie" data-loop="0" data-direction="1" data-autoplay="0" data-renderer="svg" data-duration="1.6"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 180 10" width="180" height="10" preserveAspectRatio="xMidYMid meet" style="width: 7%; height: 100%; transform: translate3d(0px, 0px, 0px); content-visibility: visible;"><defs><clipPath id="__lottie_element_77"><rect width="180" height="10" x="0" y="0"></rect></clipPath></defs><g clip-path="url(#__lottie_element_77)"><g transform="matrix(1,0,0,1,0,0)" opacity="1" style="display: block;"><g opacity="1" transform="matrix(1,0,0,1,95.31400299072266,4.877999782562256)"><path stroke-linecap="round" stroke-linejoin="round" fill-opacity="0" stroke="rgb(255,142,94)" stroke-opacity="1" stroke-width="2" d=" M-94.31400299072266,2.8289999961853027 C-71.18099975585938,0.054999999701976776 68.78500366210938,-4.080999851226807 81.55000305175781,-3.5339999198913574 C94.31400299072266,-2.986999988555908 41.279998779296875,0.4059999883174896 10.050000190734863,4.080999851226807"></path></g></g></g></svg></span>


//  three lines      <div data-w-id="83954a31-6c48-41c5-e145-afafc08539ed" data-is-ix2-target="1" class="text-lottie-anim crown-up-right" data-animation-type="lottie" data-src="https://cdn.prod.website-files.com/5e8b3356a5a8f5321855bbe7/646ba23cbfa30d3682be607b_crowm-04.lottie" data-loop="0" data-direction="1" data-autoplay="0" data-renderer="svg" data-duration="1.6"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 25 15" width="25" height="15" preserveAspectRatio="xMidYMid meet" style="width: 100%; height: 100%; transform: translate3d(0px, 0px, 0px); content-visibility: visible;"><defs><clipPath id="__lottie_element_82"><rect width="25" height="15" x="0" y="0"></rect></clipPath></defs><g clip-path="url(#__lottie_element_82)"><g transform="matrix(1,0,0,1,0,0)" opacity="1" style="display: block;"><g opacity="1" transform="matrix(1,0,0,1,2.006999969482422,4.7270002365112305)"><path stroke-linecap="round" stroke-linejoin="miter" fill-opacity="0" stroke-miterlimit="4" stroke="rgb(255,142,94)" stroke-opacity="1" stroke-width="2" d=" M1.0069999694824219,3.0920000076293945 C1.0069999694824219,0.8939999938011169 -0.01899999938905239,-1.1929999589920044 -1.0069999694824219,-3.0920000076293945"></path></g><g opacity="1" transform="matrix(1,0,0,1,12.265000343322754,5.366000175476074)"><path stroke-linecap="round" stroke-linejoin="miter" fill-opacity="0" stroke-miterlimit="4" stroke="rgb(255,142,94)" stroke-opacity="1" stroke-width="2" d=" M-1.8009999990463257,4.367000102996826 C-1.6610000133514404,3.4539999961853027 -1.13100004196167,2.5299999713897705 -0.7699999809265137,1.6990000009536743 C0.10400000214576721,-0.31700000166893005 0.9629999995231628,-2.3359999656677246 1.8009999990463257,-4.367000102996826"></path></g><g opacity="1" transform="matrix(1,0,0,1,19.361000061035156,13.17199993133545)"><path stroke-linecap="round" stroke-linejoin="miter" fill-opacity="0" stroke-miterlimit="4" stroke="rgb(255,142,94)" stroke-opacity="1" stroke-width="2" d=" M-4.638999938964844,0.38199999928474426 C-1.5390000343322754,0.0820000022649765 1.5099999904632568,-0.38199999928474426 4.638999938964844,-0.38199999928474426"></path></g></g></g></svg></div>

//  spring           <div data-w-id="83954a31-6c48-41c5-e145-afafc08539f1" data-is-ix2-target="1" class="lottie-animation-238" data-animation-type="lottie" data-src="https://cdn.prod.website-files.com/5e8b3356a5a8f5321855bbe7/6659efa8fbc13b2ca52fc10e_spring-11.lottie" data-loop="0" data-direction="1" data-autoplay="0" data-renderer="svg" data-default-duration="1.1" data-duration="1.6"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 160 144" width="160" height="144" preserveAspectRatio="xMidYMid meet" style="width: 100%; height: 100%; transform: translate3d(0px, 0px, 0px); content-visibility: visible;"><defs><clipPath id="__lottie_element_87"><rect width="160" height="144" x="0" y="0"></rect></clipPath></defs><g clip-path="url(#__lottie_element_87)"><g transform="matrix(1,0,0,1,0,0)" opacity="1" style="display: block;"><g opacity="1" transform="matrix(1,0,0,1,81.19300079345703,80.10399627685547)"><path stroke-linecap="round" stroke-linejoin="miter" fill-opacity="0" stroke-miterlimit="4" stroke="rgb(255,142,94)" stroke-opacity="1" stroke-width="2" d=" M-76.61100006103516,-4.625 C-82.55699920654297,33.26599884033203 -84.82499694824219,95.58300018310547 -46.33300018310547,41.71099853515625 C1.781999945640564,-25.628999710083008 -9.60099983215332,-82.93199920654297 -31.051000595092773,-66.68800354003906 C-52.5,-50.44499969482422 -71.05999755859375,87.69599914550781 -21.613000869750977,47.55099868774414 C27.834999084472656,7.406000137329102 74.33799743652344,-95.58300018310547 35.112998962402344,-76.54499816894531 C-4.111999988555908,-57.50699996948242 -22.198999404907227,60.172000885009766 14.807000160217285,37.79199981689453 C51.81399917602539,15.413000106811523 84.8239974975586,-46.569000244140625 76.20999908447266,-73.78099822998047"></path></g></g></g></svg></div>




//.saas-illustration-col {
  ///align-self: flex-end;
  //margin-left: 20px;
//}
//.saas-illustration {
//  width: 160px;
//  height: auto;
//}







 


























  