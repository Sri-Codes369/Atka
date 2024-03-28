import BookingForm from "../BookingForm/bookingForm";
import Gallery from "../Gallery/Gallery";
import PackageSection from "../Package/package";
import ServicesSection from "../Services/services";
import About from "../About/about";
import Footer from "../Footer/footer";


function MainView() {

  

    return(
       <div>
         <>
         <BookingForm />
         <PackageSection />
         <ServicesSection />
        <Gallery />
        <About />
        <Footer />
         </>
       </div>
    );
}

export default MainView;


