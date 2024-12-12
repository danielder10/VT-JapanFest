"use client";

import React from "react";
import { useRouter } from "next/navigation";
import Map, { Marker, Popup } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";

// Define an interface for the location type
interface Location {
  name: string;
  latitude: number;
  longitude: number;
  description: string;
  image: string;
}

const MAPBOX_TOKEN = "pk.eyJ1IjoiZGRlcjEwIiwiYSI6ImNtNGlmcnlpZTAxc3AycXBwcGE2Mms5ZHkifQ.yxVvnT_J3qq_aQADrcUaRg";

const locations: Location[] = [
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
    { name: "Ishigaki", latitude: 24.3448, longitude: 124.1572, description: "A tropical island paradise in Okinawa Prefecture.", image: "https://lh5.googleusercontent.com/p/AF1QipOshFbR6P-91K5XtF71uge_xy8vVGgEfAbOBSRC=w1080-h624-n-k-no" },
    { name: "Kamakura", latitude: 35.3192, longitude: 139.5503, description: "A coastal town with ancient temples, the Great Buddha, and samurai history.", image: "https://encrypted-tbn3.gstatic.com/licensed-image?q=tbn:ANd9GcQJ4qP3MKNh9SGmMeQjKVMC5UOa5RcpMVt25SgqrnRVYfoccAoY-p_NkVchkd-i_6aOjAr-HQYXCNMQjApGzLHANW37losZz2_PczCFYQ" },
    { name: "Nara", latitude: 34.6851, longitude: 135.8048, description: "Japan's first permanent capital, famous for friendly deer and historic temples.", image: "https://encrypted-tbn2.gstatic.com/licensed-image?q=tbn:ANd9GcQ0oSzYagsuJYGqr0C3ThMFhlIr4ntVAIvfZs5d8DKJHQmEXy1CIAP7cDILNuZzcz5KDRbElnmo2wad0XFONV416rc3F2LG263Pfjx7aA" },
    { name: "Kumamoto", latitude: 32.8031, longitude: 130.7081, description: "Home to the majestic Kumamoto Castle and gateway to Aso volcanic region.", image: "https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcRvmeZLzHUWdwtBSfBOR0_oBXjllXgCYAem3wCcCdFNfjUhKNeDsHXuT1OWQAnSz8z9XuropEBshAeUQJgI5mISr05JBfKwssYLGHhhqw" },
    { name: "Kawagoe", latitude: 35.9258, longitude: 139.4868, description: "A historic city nicknamed 'Little Edo' with well-preserved traditional architecture.", image: "https://encrypted-tbn2.gstatic.com/licensed-image?q=tbn:ANd9GcTaOq1S580tUXGT7-yA1dhS8DNZBOHn8Sigwov7OwsJIIWqLNLZl9FU-3WJFoaTPavxuixwbQp6sklXOnzFaldeuMv2sO7k0Fh4YOa5qQ" },
    { name: "Beppu", latitude: 33.2620, longitude: 131.5089, description: "A famous hot spring resort town with numerous onsen and unique geothermal landscapes.", image: "https://encrypted-tbn1.gstatic.com/licensed-image?q=tbn:ANd9GcQLmMzcnHNmkxZKaiDU3J2zmxSivE2aCx1-azu32P3YJU7AfGJpLPethSwV0VCNNraUxqk_wy79LPxsGj54ZswsYn7OQ4-hj-5FwNiTxw" },
    { name: "Kurashiki", latitude: 34.6527, longitude: 133.7712, description: "A charming historic city with a beautifully preserved merchant district.", image: "https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcTxYLyVu5bXFPsTs-y16l1sazkBxbyId6yWFGd-jsiORx3XcxfhxEoKHm9uCETIHdiO2Ltnf3DSWlhrjfW218dfpGPxSMVAJwJHp3bQfg" },
    { name: "Gifu", latitude: 35.4232, longitude: 136.7578, description: "A castle town known for traditional cormorant fishing and historic sites.", image: "https://encrypted-tbn3.gstatic.com/licensed-image?q=tbn:ANd9GcQwyvDd-uwjb_-8ZjLzy-2TH5ry9fkF7Xb-eLinXwTYfF9LP5h9kBxdXVTeDXKCu1iFmpJ3LtqygcdAPmh05HmMlA12ngfG6zjvlmqBcw" },
    { name: "Himeji", latitude: 34.8331, longitude: 134.6936, description: "Home to Japan's most spectacular feudal castle, a UNESCO World Heritage site.", image: "https://lh5.googleusercontent.com/p/AF1QipMX1JhoN_dBd1Y3qvezOM0DS6AAwp11IJK2WNgB=w1080-h624-n-k-no" },
    { name: "Miyajima", latitude: 34.2964, longitude: 132.3194, description: "An island famous for the iconic floating torii gate of Itsukushima Shrine.", image: "https://lh5.googleusercontent.com/p/AF1QipO-hBXneZYbYGhkScafbg2pPnqVhwLZCjlk3BhS=w1080-h624-n-k-no" },
    { name: "Otaru", latitude: 43.1907, longitude: 140.9752, description: "A charming port city in Hokkaido known for canal district and glassworks.", image: "https://res.cloudinary.com/jnto/image/upload/w_4608,h_3456,c_fill,f_auto,fl_lossy,q_60/v1/media/filer_public/38/56/3856aaf5-e628-4f1f-88ad-85cba8b6af47/psx_20180218_182123_ql6h5s" },
  ];  

  const MapPage = () => {
    const router = useRouter();
    const [selectedLocation, setSelectedLocation] = React.useState<Location | null>(locations[0]);

    return (
      <div className="min-h-screen bg-gray-50 flex">
        {/* Left Side - Map */}
        <div className="w-2/3 p-4 bg-white shadow-lg">
          <div className="h-[calc(100vh-2rem)] rounded-xl overflow-hidden">
            <Map
              initialViewState={{
                longitude: 138.2529,
                latitude: 36.2048,
                zoom: 5,
              }}
              style={{ width: "100%", height: "100%" }}
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
                  <div className="bg-red-500 w-5 h-5 rounded-full cursor-pointer hover:scale-125 transition-transform"></div>
                </Marker>
              ))}
            </Map>
          </div>
        </div>

        {/* Right Side - Location Details */}
        <div className="w-1/3 p-6 bg-gray-100 overflow-y-auto">
          <div className="sticky top-0 z-10 bg-gray-100 pb-4">
            <button
              onClick={() => router.back()}
              className="mb-4 bg-gray-800 text-white px-4 py-2 rounded shadow hover:bg-gray-700 transition"
            >
              Back
            </button>
            <h1 className="text-3xl font-bold text-gray-800 mb-4">Explore Japan</h1>
          </div>

          {selectedLocation ? (
            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              <img
                src={selectedLocation.image}
                alt={selectedLocation.name}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">{selectedLocation.name}</h2>
                <p className="text-gray-600">{selectedLocation.description}</p>
              </div>
              <div className="p-6 pt-0 flex flex-wrap gap-2">
                {locations.map((loc) => (
                  <button
                    key={loc.name}
                    onClick={() => setSelectedLocation(loc)}
                    className={`px-3 py-1 rounded-full text-sm transition ${
                      selectedLocation.name === loc.name
                        ? 'bg-blue-500 text-white'
                        : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                    }`}
                  >
                    {loc.name}
                  </button>
                ))}
              </div>
            </div>
          ) : (
            <div className="text-center text-gray-500">
              <p>Select a location on the map</p>
            </div>
          )}

          {/* Footer */}
          <footer className="mt-8 text-center">
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
      </div>
    );
};
  
export default MapPage;