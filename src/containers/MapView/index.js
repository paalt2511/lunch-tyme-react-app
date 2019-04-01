import React from "react";
import Map from "../../components/Map";
import "./styles.scss";

const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

class MapView extends React.Component {
  shouldComponentUpdate(nextProps) {
    return !!nextProps.item;
  }
  render() {
    const { item } = this.props;
    return (
      <div className="map-view">
        {item && (
          <>
            <Map
              googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyACn9GpBrpsCdQhoYEFlQb64tSmCOxPKMs"
              loadingElement={<div style={{ height: `100%` }} />}
              containerElement={<div style={{ height: `${isMobile ? '180px' : '360px'}` }} />}
              mapElement={<div style={{ height: `100%` }} />}
              lat={item.location.lat}
              lon={item.location.lng}
              isMarkerShown={true}
            />
            <div className="map-view__banner">
              <h3>{item.name}</h3>
              <span>{item.category}</span>
            </div>
            <ul className="map-view__info">
              <li>
                {item.location.formattedAddress[0]}
                <br />
                {item.location.formattedAddress[1]}
              </li>
              <li>{item.contact && item.contact.formattedPhone ? item.contact.formattedPhone : ""}</li>
              <li>{item.contact && item.contact.twitter ? `@${item.contact.twitter}` : ""}</li>
            </ul>
          </>
        )}
      </div>
    );
  }
}

export default MapView;
