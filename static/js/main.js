$(document).ready(function () {
    // Init
    $('.image-section').hide();
    $('.loader').hide();
    $('#result').hide();

    // Upload Preview
    function readURL(input) {
        if (input.files && input.files[0]) {
            var reader = new FileReader();
            reader.onload = function (e) {
                $('#imagePreview').css('background-image', 'url(' + e.target.result + ')');
                $('#imagePreview').hide();
                $('#imagePreview').fadeIn(650);
            }
            reader.readAsDataURL(input.files[0]);
        }
    }
    $("#imageUpload").change(function () {
        $('.image-section').show();
        $('#btn-predict').show();
        $('#result').text('');
        $('#result').hide();
        readURL(this);
    });

    var shoes = `<section class="our-process" id="about" style="align-items: center;">
    <div class="container">
        <div class="row">
            <div class="col-sm-6" data-aos="fade-up">
                <h5 class="text-dark">Many organizations, including Soles4Souls and TOMS Shoes, </h5>
                <h3 class="font-weight-medium text-dark">Collect gently used shoes and</h3>
                <h5 class="text-dark mb-3">distribute them to those in need. </h5> 

                </p>
                <div class="d-flex justify-content-start mb-3">
                    <img src="static/images/tick.png" alt="tick" class="mr-3 tick-icon"  >
                    <p class="mb-0">Shoe waste management involves not only recycling but also the recovery and repurposing of materials.</p>
                </div>
                <div class="d-flex justify-content-start mb-3">
                    <img src="static/images/tick.png" alt="tick" class="mr-3 tick-icon"  >
                    <p class="mb-0"> Shoes are often made from a combination of materials like rubber, leather, and synthetic fabrics. Leather and rubber components in shoes take a long time to decompose, contributing to environmental pollution.</p>
                </div>
                <div class="d-flex justify-content-start">
                    <img src="static/images/tick.png" alt="tick" class="mr-3 tick-icon"  >
                    <p class="mb-0">Singapore has implemented innovative shoe waste management strategies, including the development of a shoe recycling ecosystem.</p>
                </div>
            </div>
            <div class="col-sm-6 text-right" data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000">
                <iframe class="vdo-box" style="width: 100%; height: 100%;" src="https://www.youtube.com/embed/BbLlJPwMBKQ?si=9TrOo0dOwHgjNKKs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </div>
        </div>
    </div>
</section>`
    var battery = `<section class="our-process" id="about" style="align-items: center;">
    <div class="container">
        <div class="row">
            <div class="col-sm-6" data-aos="fade-up">
                <h5 class="text-dark">Recycling batteries consumes less energy than</h5>
                <h3 class="font-weight-medium text-dark">producing new ones from scratch.</h3>
                <h5 class="text-dark mb-3">Recylex: Battery Recycling Hub</h5> 

                </p>
                <div class="d-flex justify-content-start mb-3">
                    <img src="static/images/tick.png" alt="tick" class="mr-3 tick-icon"  >
                    <p class="mb-0">Recycling recovers valuable materials like lithium, cobalt, and nickel. Proper recycling reduces environmental contamination and conserves resources.</p>
                </div>
                <div class="d-flex justify-content-start mb-3">
                    <img src="static/images/tick.png" alt="tick" class="mr-3 tick-icon"  >
                    <p class="mb-0">Recycling and safe disposal programs are crucial for mitigating these risks. Recovering valuable materials from old batteries reduces resource demand.</p>
                </div>
                <div class="d-flex justify-content-start">
                    <img src="static/images/tick.png" alt="tick" class="mr-3 tick-icon"  >
                    <p class="mb-0">Battery waste poses environmental and health risks due to chemical leakage. Improper disposal contaminates soil and water ecosystems.</p>
                </div>
            </div>
            <div class="col-sm-6 text-right" data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000">
                <iframe style="width: 100%; height: 100%;" src="https://www.youtube.com/embed/pcQIQeMylfU?si=UgDkbpzSzb0iOIef" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </div>
        </div>
    </div>
</section>`
    var biological = `<section class="our-process" id="about" style="align-items: center;">
    <div class="container">
        <div class="row">
            <div class="col-sm-6" data-aos="fade-up">
                <h5 class="text-dark">Biological waste comprises organic materials from living organisms.</h5>
                <h3 class="font-weight-medium text-dark">Effective biological waste management </h3>
                <h5 class="text-dark mb-3">Reduces landfill usage and promotes sustainability.</h5> 

                </p>
                <div class="d-flex justify-content-start mb-3">
                    <img src="static/images/tick.png" alt="tick" class="mr-3 tick-icon"  >
                    <p class="mb-0">Biological waste, also known as bio-waste or biodegradable waste, consists of organic materials derived from living organisms. </p>
                </div>
                <div class="d-flex justify-content-start mb-3">
                    <img src="static/images/tick.png" alt="tick" class="mr-3 tick-icon"  >
                    <p class="mb-0">These waste materials can decompose naturally and include items such as food scraps, yard waste, and biodegradable packaging.</p>
                </div>
                <div class="d-flex justify-content-start">
                    <img src="static/images/tick.png" alt="tick" class="mr-3 tick-icon"  >
                    <p class="mb-0"> Proper management of biological waste through composting or anaerobic digestion can help reduce landfill usage</p>
                </div>
            </div>
            <div class="col-sm-6 text-right" data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000">
                
                <iframe style="width: 100%; height: 100%;" src="https://www.youtube.com/embed/gqkmc4W1YOA?si=aInKmPe-ut1WryW2" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </div>
        </div>
    </div>
</section>`
    var cardboard = `<section class="our-process" id="about" style="align-items: center;">
    <div class="container">
        <div class="row">
            <div class="col-sm-6" data-aos="fade-up">
                <h5 class="text-dark">Cardboard is highly recyclable, as it is made from paper fibers. </h5>
                <h3 class="font-weight-medium text-dark">Effective biological waste management </h3>
                <h5 class="text-dark mb-3">Reduces landfill usage and promotes sustainability.</h5> 

                </p>
                <div class="d-flex justify-content-start mb-3">
                    <img src="static/images/tick.png" alt="tick" class="mr-3 tick-icon"  >
                    <p class="mb-0">Cardboard waste can be repurposed for various creative projects, including art, crafts, and DIY home furniture.</p>
                </div>
                <div class="d-flex justify-content-start mb-3">
                    <img src="static/images/tick.png" alt="tick" class="mr-3 tick-icon"  >
                    <p class="mb-0">Recycling cardboard waste has economic benefits, such as reducing disposal costs and creating jobs in the recycling industry.</p>
                </div>
                <div class="d-flex justify-content-start">
                    <img src="static/images/tick.png" alt="tick" class="mr-3 tick-icon"  >
                    <p class="mb-0">Proper sorting and disposal are crucial to maintain cardboard recycling quality.</p>
                </div>
            </div>
            <div class="col-sm-6 text-right" data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000">
                <iframe style="width: 100%; height: 100%;" src="https://www.youtube.com/embed/AFWogncmqoQ?si=ezAJ5ALimd8xHHbb" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </div>
        </div>
    </div>
</section>`
    var plastic = `<section class="our-process" id="about" style="align-items: center;">
    <div class="container">
        <div class="row">
            <div class="col-sm-6" data-aos="fade-up">
                <h5 class="text-dark">Plastic waste can break down into tiny particles- microplastics</h5>
                <h3 class="font-weight-medium text-dark">Plastic waste is widespread and highly durable.</h3>
                <h5 class="text-dark mb-3">Some technologies aim to convert plastic waste into fuels</h5> 

                </p>
                <div class="d-flex justify-content-start mb-3">
                    <img src="static/images/tick.png" alt="tick" class="mr-3 tick-icon"  >
                    <p class="mb-0">Biodegradable plastics are designed to break down more easily in the environment. </p>
                </div>
                <div class="d-flex justify-content-start mb-3">
                    <img src="static/images/tick.png" alt="tick" class="mr-3 tick-icon"  >
                    <p class="mb-0"> Many businesses are adopting sustainable packaging practices and seeking alternatives to single-use plastics in response to consumer demand</p>
                </div>
                <div class="d-flex justify-content-start">
                    <img src="static/images/tick.png" alt="tick" class="mr-3 tick-icon"  >
                    <p class="mb-0">Plastic waste is a global issue, and international agreements and partnerships are forming to address plastic pollution in oceans and shared environments.</p>
                </div>
            </div>
            <div class="col-sm-6 text-right" data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000">
                <iframe style="width: 100%; height: 100%;" src="https://www.youtube.com/embed/BwIGGzCmTok?si=rIjuTgvKRiizhZkF" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </div>
        </div>
    </div>
</section>`
    var cloth = `<section class="our-process" id="about" style="align-items: center;">
    <div class="container">
        <div class="row">
            <div class="col-sm-6" data-aos="fade-up">
                <h5 class="text-dark">Cloth waste, includes discarded clothing and fabrics.</h5>
                <h3 class="font-weight-medium text-dark"> Sustainable fashion practices,</h3>
                <h5 class="text-dark mb-3">Aim to address cloth waste at its source.</h5> 

                </p>
                <div class="d-flex justify-content-start mb-3">
                    <img src="static/images/tick.png" alt="tick" class="mr-3 tick-icon"  >
                    <p class="mb-0">Effective cloth waste management is essential due to the environmental impact of textile production and disposal.</p>
                </div>
                <div class="d-flex justify-content-start mb-3">
                    <img src="static/images/tick.png" alt="tick" class="mr-3 tick-icon"  >
                    <p class="mb-0"> Donating gently used clothing to charities or thrift stores can help those in need while diverting textiles from landfills</p>
                </div>
                <div class="d-flex justify-content-start">
                    <img src="static/images/tick.png" alt="tick" class="mr-3 tick-icon"  >
                    <p class="mb-0">To address the textile waste challenge comprehensively, sustainable fashion practices, such as designing for durability</p>
                </div>
            </div>
            <div class="col-sm-6 text-right" data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000">
                <iframe style="width: 100%; height: 100%;" src="https://www.youtube.com/embed/obO1PKfXGpQ?si=vU2-YcJQ2uXpKEwl" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </div>
        </div>
    </div>
</section>`
    var metal = `<section class="our-process" id="about" style="align-items: center;">
    <div class="container">
        <div class="row">
            <div class="col-sm-6" data-aos="fade-up">
                <h5 class="text-dark">Collection, and processing- key steps in metal management.</h5>
                <h3 class="font-weight-medium text-dark">Efficient product design aims to reduce metal consumption</h3>
                <h5 class="text-dark mb-3">Lowers greenhouse gas emissions.</h5> 

                </p>
                <div class="d-flex justify-content-start mb-3">
                    <img src="static/images/tick.png" alt="tick" class="mr-3 tick-icon"  >
                    <p class="mb-0">Effective management is essential due to the environmental, economic, and energy-saving benefits of recycling metals.</p>
                </div>
                <div class="d-flex justify-content-start mb-3">
                    <img src="static/images/tick.png" alt="tick" class="mr-3 tick-icon"  >
                    <p class="mb-0">Metal waste management practices typically begin with the collection and sorting of metal materials.</p>
                </div>
                <div class="d-flex justify-content-start">
                    <img src="static/images/tick.png" alt="tick" class="mr-3 tick-icon"  >
                    <p class="mb-0">Recycling metals not only conserves natural resources and reduces the energy required for mining</p>
                </div>
            </div>
            <div class="col-sm-6 text-right" data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000">
                <iframe style="width: 100%; height: 100%;" src="https://www.youtube.com/embed/qAGCI0-pQ3E?si=wkzOeM_GzK_JOVuu" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </div>
        </div>
    </div>
</section>`
    var glass = `<section class="our-process" id="about" style="align-items: center;">
    <div class="container">
        <div class="row">
            <div class="col-sm-6" data-aos="fade-up">
                <h5 class="text-dark">Glass waste includes discarded jars, and packaging.</h5>
                <h3 class="font-weight-medium text-dark">Glass recycling supports </h3>
                <h5 class="text-dark mb-3">the circular economy and reduces new raw materials.</h5> 

                </p>
                <div class="d-flex justify-content-start mb-3">
                    <img src="static/images/tick.png" alt="tick" class="mr-3 tick-icon"  >
                    <p class="mb-0">Effective management of glass waste is essential due to the environmental benefits of recycling glass</p>
                </div>
                <div class="d-flex justify-content-start mb-3">
                    <img src="static/images/tick.png" alt="tick" class="mr-3 tick-icon"  >
                    <p class="mb-0">In India, there are several glass recycling plants and facilities that play a crucial role in managing glass waste sustainably.</p>
                </div>
                <div class="d-flex justify-content-start">
                    <img src="static/images/tick.png" alt="tick" class="mr-3 tick-icon"  >
                    <p class="mb-0">Reduces the environmental impact of glass production but also supports the circular economy by promoting the reuse of glass materials.</p>
                </div>
            </div>
            <div class="col-sm-6 text-right" data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000">
                <iframe style="width: 100%; height: 100%;" src="https://www.youtube.com/embed/18oxQkP4qQ0?si=OAjvfCFdCtvfHv23" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </div>
        </div>
    </div>
</section>`
    var trash = `<section class="our-process" id="about" style="align-items: center;">
    <div class="container">
        <div class="row">
            <div class="col-sm-6" data-aos="fade-up">
                <h5 class="text-dark">Encompasses a range of discarded items and materials.</h5>
                <h3 class="font-weight-medium text-dark">Waste-to-energy</h3>
                <h5 class="text-dark mb-3">incineration can convert trash into electricity or heat.</h5> 

                </p>
                <div class="d-flex justify-content-start mb-3">
                    <img src="static/images/tick.png" alt="tick" class="mr-3 tick-icon"  >
                    <p class="mb-0">Effective trash waste management is crucial to mitigate the environmental, health, and aesthetic impacts of waste disposal.</p>
                </div>
                <div class="d-flex justify-content-start mb-3">
                    <img src="static/images/tick.png" alt="tick" class="mr-3 tick-icon"  >
                    <p class="mb-0">Trash waste is typically divided into different waste streams, such as organic waste, recyclables, and non-recyclables. </p>
                </div>
                <div class="d-flex justify-content-start">
                    <img src="static/images/tick.png" alt="tick" class="mr-3 tick-icon"  >
                    <p class="mb-0">Some communities use waste-to-energy incineration to convert trash into electricity or heat.</p>
                </div>
            </div>
            <div class="col-sm-6 text-right" data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000">
                <iframe style="width: 100%; height: 100%;" src="https://www.youtube.com/embed/uUmtJIBibMM?si=iTTMZ9Wcm6OXdeGO" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </div>
        </div>
    </div>
</section>`

    // Predict
    $('#btn-predict').click(function () {
        var form_data = new FormData($('#upload-file')[0]);

        // Show loading animation
        $(this).hide();
        $('.loader').show();

        // Make prediction by calling api /predict
        $.ajax({
            type: 'POST',
            url: '/predict',
            data: form_data,
            contentType: false,
            cache: false,
            processData: false,
            async: true,
            success: function (data) {
                // Get and display the result
                $('.loader').hide();
                $('#result').fadeIn(600);
                $('#result').text('Result: Your waste material is ' + data);
                if(data[0] === 'shoes')
                {
                    document.getElementById("about").innerHTML =  shoes
                }
                else if(data[0] === 'battery')
                {
                    document.getElementById("about").innerHTML =  battery
                }
                else if(data[0] === 'biological')
                {
                    document.getElementById("about").innerHTML =  biological
                }
                else if(data[0] === 'cardboard')
                {
                    document.getElementById("about").innerHTML =  cardboard
                }
                else if(data[0] === 'plastic')
                {
                    document.getElementById("about").innerHTML =  plastic
                }
                else if(data[0] === 'clothes')
                {
                    document.getElementById("about").innerHTML =  cloth
                }
                else if(data[0] === 'metal')
                {
                    document.getElementById("about").innerHTML =  metal
                }
                else if(data[0] === 'trash')
                {
                    document.getElementById("about").innerHTML =  trash
                }
                else
                {
                    document.getElementById("about").innerHTML =  glass
                }
                console.log(data)
                console.log('Success!');
            },
        });
    });

});