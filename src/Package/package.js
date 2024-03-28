// Component for the package card
function PackageCard({ imageUrl, placeName, attractions, price, rating }) {
    return (

        // <div class="packageSection d-flex flex-column " >
            

            <div class="card d-flex">
                <div class="package-img-div">
                <img  src={imageUrl} alt={placeName} class="card-img-top" />
                </div>
                <div class="card-body">
                    <p class="card-text font-weight-bold" >{attractions}</p>
                    <p class="card-text" style={{color:'#0d6efd'}}><span style={{color:'orange'}}>Price:</span> ${price}</p>
                    <p class="card-text">Rating: {rating}</p>
                    <button class="btn btn-warning">Book Now</button>
                </div>
            </div>
        // </div>

    );
}

// Component for the packages section
function PackageSection() {
    const packages = [
        { imageUrl: 'https://tse4.mm.bing.net/th?id=OIP.rG1z8yccg6gv9jPIL7lE9gHaE8&pid=Api&P=0&h=180', placeName: 'India', attractions: 'Attractions of india', price: 100, rating: 4.5 },
        { imageUrl: 'https://tse1.mm.bing.net/th?id=OIP.MFDXLLiQzkhGuvuj6eNFLAHaFt&pid=Api&P=0&h=180', placeName: 'Japan', attractions: 'Attractions of Japan', price: 150, rating: 4.2 },
        { imageUrl: 'https://tse1.mm.bing.net/th?id=OIP.mTSGNGqZrivXqZsjx4g9DAHaEI&pid=Api&P=0&h=180', placeName: 'Switzerland', attractions: 'Attractions of Switzerland', price: 120, rating: 4.8 },
        // Add more packages as needed
    ];

    return (
        <div class="package-section ">
            <div>
            <h2 style={{color:'#0d6efd'}}><span style={{color:'orange'}}>P</span>ackage</h2>
            </div>
           <div class="Package-innersection">
           {packages.map((pkg, index) => (
                <PackageCard key={index} {...pkg} />
           
            ))}
            </div>
        </div>
    );
}


export default PackageSection;