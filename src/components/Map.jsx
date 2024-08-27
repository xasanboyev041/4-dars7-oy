// Map.jsx
import React from "react";

const Map = () => {
  return (
    <div className="map bg-white p-4 rounded-2xl shadow-lg w-full max-w-3xl mx-auto mb-8">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15089083.424147012!2d52.03778440298041!3d41.203314847077556!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDHCsDEyJzAxLjgiTiA3MsKwMTInMDMuOCJF!5e0!3m2!1sen!2s!4v1597462789654!5m2!1sen!2s"
        width="100%"
        height="300"
        className="rounded-lg"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
      ></iframe>
    </div>
  );
};

export default Map;
