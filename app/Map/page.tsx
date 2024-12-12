"use client";

import React from "react";
import { useRouter } from "next/navigation";
import Map, { Marker, Popup } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";

const MAPBOX_TOKEN = "pk.eyJ1IjoiZGRlcjEwIiwiYSI6ImNtNGlmcnlpZTAxc3AycXBwcGE2Mms5ZHkifQ.yxVvnT_J3qq_aQADrcUaRg";

const locations = [
    { name: "Tokyo", latitude: 35.6895, longitude: 139.6917, description: "The bustling capital city.", image: "https://encrypted-tbn1.gstatic.com/licensed-image?q=tbn:ANd9GcR3ZdS6obKdBRdwtFB8OCpnVYt6A4R3wiPJaJT_zEgpnmTF0TZuNjVTGF9mrepjCEr33RvP5qmVfsxu6EbDN56zI1R5i9GzSDz1wU5uVw" },
    { name: "Kyoto", latitude: 35.0116, longitude: 135.7681, description: "Classical temples and gardens.", image: "https://encrypted-tbn3.gstatic.com/licensed-image?q=tbn:ANd9GcTnIdP-0NmpVWpH0BoVsuw__BLe2tVSeeBo_EWw1XgYuES4wicTEpMmgIErBvzT53WhwyVmc-nRlvhgf8RAOV-AdaY4gmxnCzzxJwvGxg" },
    { name: "Osaka", latitude: 34.6937, longitude: 135.5023, description: "Modern architecture and food culture.", image: "https://encrypted-tbn3.gstatic.com/licensed-image?q=tbn:ANd9GcTrK3hriM76bGbFWXV84TAmwpUA9oi7Kdru9r10ZPdUuGzXSjyxab7fUHC--ACSX7aWbNujgkp6N-NAiKEuV3I4EHfqSQEUNe7OinNxhQ" },
    { name: "Hiroshima", latitude: 34.3853, longitude: 132.4553, description: "A city of peace and memorials.", image: "https://encrypted-tbn1.gstatic.com/licensed-image?q=tbn:ANd9GcRtglKQIVwHUCtm7d_hyRNsWVRyYsZVBqkRjMJ_rXVtUJLhJ5d2pofAJeV5y1StbK-JKRfTvIEtZ1RgY7_UDL7gQe99VFRuysgBDXbpjQ" },
    { name: "Sapporo", latitude: 43.0618, longitude: 141.3545, description: "Beer, snow festivals, and outdoor activities.", image: "https://encrypted-tbn2.gstatic.com/licensed-image?q=tbn:ANd9GcTWbBjUAPmGbdI5mUHVhg3Ju0vlVBn30tJTzQ3BbyvrY0Eqn0NhgFl3OjBlPGF1kZ_KjkHFVH3hGZ6pqd26CtYTjoJSjks7D-TwAKpUGg" },
    { name: "Fukuoka", latitude: 33.5902, longitude: 130.4017, description: "A vibrant port city with a rich food culture.", image: "https://encrypted-tbn1.gstatic.com/licensed-image?q=tbn:ANd9GcShXt-timQZzkivHjV0g29-4CJRLxIKz1ypyNQEfTemU07AXr98zStitpc9rAikUPk3uyMmwd3fsiN7Z6aedGMXirqA_C_QGaf5qxH4Zw" },
    { name: "Nagoya", latitude: 35.1814, longitude: 136.9066, description: "A hub for industry and history.", image: "https://encrypted-tbn3.gstatic.com/licensed-image?q=tbn:ANd9GcQEge_NbAhNIkK8JxGgmoQS3rICSFLMutreX1WqbwHCnaxJm_hh0N1mhwPjidNFSRsivMe1pvuWZIXVor8NYCD1V790F8AmPnvrJBlcaw" },
    { name: "Sendai", latitude: 38.2682, longitude: 140.8694, description: "A city of trees and the Tanabata Festival.", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/SendaiCity_Skylines_from_Mukaiyama2018.jpg/278px-SendaiCity_Skylines_from_Mukaiyama2018.jpg" },
    { name: "Kobe", latitude: 34.6901, longitude: 135.1955, description: "A picturesque harbor city famous for Kobe beef.", image: "https://encrypted-tbn1.gstatic.com/licensed-image?q=tbn:ANd9GcRef4OvhimOE8Zhd6DitJTk79oBewO6hGjFW1Ciz01i3pV-vY-H7-lXOmynQOmskBwZGy-MPZ7DQEd5T4_f9cpVGQqU7wbS70WHhrXUJQ" },
    { name: "Nagasaki", latitude: 32.7503, longitude: 129.8777, description: "A city with a unique history and cultural blend.", image: "https://encrypted-tbn3.gstatic.com/licensed-image?q=tbn:ANd9GcSu2-Au-AM5vLqiWDK-vwG5fTUQh4c9o5SNXtGQyS7tn76WKhP1GbKWkNO0U2uDnvZUR4nhfyfWOqP6oZq1-A4ErzGTKFsR7RJwy2DYEw" },
    { name: "Hakodate", latitude: 41.7686, longitude: 140.7288, description: "A historic port city with stunning night views.", image: "https://encrypted-tbn1.gstatic.com/licensed-image?q=tbn:ANd9GcQuUT3l6yjvathplKS5L3qX-DQd8Eq_x0RprWz1cr70keIuFEfwmDpkHEvNTZ5WuY1e4vupb9HxhT1X4NwLziGxQNkVCn-juS7cSCQWrQ" },
    { name: "Naha", latitude: 26.2124, longitude: 127.6809, description: "The gateway to Okinawa's tropical paradise.", image: "https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcTghINodE_pDyWss-JNXKeb7b81C_yZMY2BgaaGT-ePIZKhy7ll-yuYUsoXIOV6WXrjOC-A44Nn&s=19" },
    { name: "Matsuyama", latitude: 33.8392, longitude: 132.7658, description: "Home to Dōgo Onsen, one of Japan's oldest hot springs.", image: "https://encrypted-tbn1.gstatic.com/licensed-image?q=tbn:ANd9GcRdt9taWUzQ7a_tH7OKLb-00C8laN3bt7sUM5KaI0HA022UeMJcs8w7QqCSFOKbCuROaEW08IVCBsqHJAub7cG_5IPSwMap6VJ5Jg4qhg" },
    { name: "Kanazawa", latitude: 36.5613, longitude: 136.6562, description: "Known for Kenrokuen Garden and traditional crafts.", image: "https://www.travelsewhere.net/wp-content/uploads/2023/04/DSC_0353-17.jpg" },
    { name: "Nikko", latitude: 36.7198, longitude: 139.6982, description: "Famous for the ornate Tōshō-gū Shrine and natural beauty.", image: "https://i.ytimg.com/vi/0xTcLzfarDo/maxresdefault.jpg" },
    { name: "Takayama", latitude: 36.1466, longitude: 137.2500, description: "A well-preserved Edo-period town in the mountains.", image: "https://encrypted-tbn2.gstatic.com/licensed-image?q=tbn:ANd9GcTqw1cUzax1fgh47uADVio9A2_qjoHuyblnedh5XTIYN3fRoB23-t3r6pW3zHJS3ctjqA1WB21tNfJOFr6vZnsNrfh-yHM13RglN0yYK5k" },
    { name: "Hakone", latitude: 35.2321, longitude: 139.1051, description: "Known for hot springs and views of Mount Fuji.", image: "https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcQGRdCoXopTZOsi0Br6Pb9kqP08-t11Ue9mfbDzOtM_EaQYeA9cly-tRukZbPgqh0BMImnB_jAl6AQtRY_ytYcqvCkZX3BVI5GviVgaoQ" },
    { name: "Yokohama", latitude: 35.4437, longitude: 139.6380, description: "A modern port city with cosmopolitan charm.", image: "https://i.natgeofe.com/n/a40b46d3-edce-4e21-bb68-c73433803167/guide3_square.jpg" },
    { name: "Ishigaki", latitude: 24.3448, longitude: 124.1572, description: "A tropical island paradise in Okinawa Prefecture.", image: "" },
  ];  

  const MapPage = () => {
    const router = useRouter();
    const [selectedLocation, setSelectedLocation] = React.useState(null);
  
    return (
      <div className="min-h-screen bg-white flex flex-col relative">
        {/* Back Button */}
        <button
          onClick={() => router.back()}
          className="absolute top-4 left-4 z-50 bg-gray-800 text-white px-4 py-2 rounded shadow hover:bg-gray-700 transition"
        >
          Back
        </button>
  
        {/* Hero Section */}
        <div
          className="relative h-64 bg-cover bg-center z-10"
          style={{ backgroundImage: 'url("https://www.destinationcanada.com/sites/default/files/styles/internal_/public/2024-06/Japan-1920x1080_0.jpg?itok=gUMInjrE")' }}
        >
          <div className="absolute inset-0 flex flex-col justify-center items-center z-20">
            <h1 className="text-white text-4xl font-bold">Explore Japan</h1>
          </div>
        </div>
  
        {/* Map Section */}
        <div className="flex justify-center items-center my-8">
          <div style={{ width: "90%", maxWidth: "800px", height: "600px" }} className="relative">
            <Map
              initialViewState={{
                longitude: 138.2529,
                latitude: 36.2048,
                zoom: 5,
              }}
              style={{ width: "100%", height: "100%", borderRadius: "12px" }}
              mapStyle="mapbox://styles/mapbox/streets-v11"
              mapboxAccessToken={MAPBOX_TOKEN}
              onClick={() => setSelectedLocation(null)}
            >
              {locations.map((loc, index) => (
                <Marker
                  key={index}
                  longitude={loc.longitude}
                  latitude={loc.latitude}
                  anchor="bottom"
                  onClick={(e) => {
                    e.originalEvent.stopPropagation();
                    setSelectedLocation(loc);
                  }}
                >
                  <div className="bg-red-500 w-4 h-4 rounded-full cursor-pointer"></div>
                </Marker>
              ))}
  
              {selectedLocation && (
                <Popup
                  longitude={selectedLocation.longitude}
                  latitude={selectedLocation.latitude}
                  anchor="top"
                  closeOnClick={false}
                  onClose={() => setSelectedLocation(null)}
                >
                  <div className="p-2 text-gray-800 relative">
                    <button
                      onClick={() => setSelectedLocation(null)}
                      className="absolute top-1 right-1 text-gray-500 hover:text-gray-800"
                    >
                      ✕
                    </button>
                    <img
                      src={selectedLocation.image}
                      alt={selectedLocation.name}
                      className="w-full h-32 object-cover rounded"
                    />
                    <h3 className="text-lg font-bold mt-2">{selectedLocation.name}</h3>
                    <p className="text-sm max-h-24 overflow-y-auto">{selectedLocation.description}</p>
                  </div>
                </Popup>
              )}
            </Map>
          </div>
        </div>
  
        {/* Footer */}
        <footer className="bg-white py-12 text-center relative">
          <div className="relative w-64 h-48 mx-auto">
            {/* Torii Gate */}
            <div className="absolute top-0 left-0 w-full h-6 bg-red-600 rounded-t-lg"></div>
            <div className="absolute top-6 left-6 w-4 h-36 bg-red-700"></div>
            <div className="absolute top-6 right-6 w-4 h-36 bg-red-700"></div>
            <div className="absolute top-14 left-8 w-48 h-4 bg-red-500"></div>
  
            {/* Kitsune Fox */}
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2">
              <img
                src="https://i.ibb.co/mSxc6Qb/fox.png"
                alt="Kitsune Fox"
                className="w-50 h-40"
              />
            </div>
          </div>
          <p className="text-gray-500 mt-6 text-sm">&copy; VT JapanFest 2024, All Rights Reserved.</p>

          {/* FAQ Section */}
          <div className="mt-6">
            <p className="text-black">Have more questions? Visit our FAQ page</p>
            <button
              onClick={() => window.location.href = '/FAQPage'}
              className="mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
              FAQ Page
            </button>
          </div>
        </footer>
      </div>
    );
  };
  
export default MapPage;