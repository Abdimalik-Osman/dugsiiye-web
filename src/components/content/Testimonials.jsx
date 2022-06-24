import React from 'react';
import '../../App.css';
import Test from '../../components/images/PHP.png';
function Testimonials(){
    //testimonials  or what people say
    return(
        <div className="testimonial-container">
        <h1 className="text-center fw-bold py-4 mt-5">What Our Student Have To Say</h1>
        <p className="text-sm-center text-gray pb-3 ">Discover Your Perfect Program In Our Courses</p>
            <div className="testimonials">
                <div className="testimonial-img">
                    <img src={Test} alt="testimonial"/>
                </div>
                <div className="testimonial-body wrapper">
                    <p>Waxaan Ku faraxsanahay Inan ka mid ahay Ardayda wax ka baratay Dugsiiye Online Academy oo aan dhihi karo waa Goobta ugu Fiican ee uu wax ka baran karo qofka doonaya inuu noqdo Full stack Web Developer . Ani ahaanteyda waxaan ka mid ahay Ardayda Ku xirneed Bilow Ilaa iyo Dhamaad kana faa'ideystay Cours kasta oo halkan ku jira. Waxaana u mahad celina Eng Mc Hamouda oo inoo Surta geliyay inan anagoo xafadeena joogna aan barano Lugadaha programinka kuna barano afkeena hooyo. Mahadsanidiin</p>
                    <h6>Abdimalik Osman Hassan</h6>
                    <span className="testimonial-title">Web Developer</span>
                </div>
            </div>
        </div>
    )
}
export default Testimonials;