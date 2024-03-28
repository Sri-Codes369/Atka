

function ServicesSection() {
    const services = [
      { name: 'Affordable Hotel', iconClass: 'bi bi-buildings' },
      { name: 'Food & Drinks', iconClass: 'bi bi-cup-straw' },
      { name: 'Safety Guide', iconClass: 'bi bi-person-arms-up' },
      { name: 'Local Transport', iconClass: 'bi bi-car-front' },
      { name: 'Medical', iconClass: 'bi bi-heart-pulse' },
      { name: 'Support', iconClass: 'bi bi-whatsapp' }
      // Add more services as needed
    ];
  
    return (
      <div class="services-section">
        <div id="BookingSectionHeader" class="w-100 text-center my-2">
            <h2 style={{color:'#0d6efd'}}><span style={{color:'orange'}}>S</span>ervices</h2>
        </div>
        <div class="serviceCardContainer">
          {services.map((service, index) => (
            <div class="card text-white bg-info mb-3" style={{width: "18rem", height:"10rem"}}>
            
            <div class="card-body text-center">
                <i class={`${service.iconClass} servicesIcon`}></i>
              <h5 class="card-title">{service.name}</h5>
              
            </div>
          </div>
          ))}
        </div>
      </div>
    );
  }

  export default ServicesSection;
  
  