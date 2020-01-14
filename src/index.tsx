import * as React from "react";

interface GoogleStaticMapProps {
  latitude: string | number;
  longitude: string | number;
  size: {
    width: number;
    height: number;
  };
  zoom: number;
  scale?: number;
  mapFormat?: 'png' | 'png32' | 'gif' | 'jpg' | 'jpg-baseline';
  mapType?: 'roadmap' | 'satellite' | 'terrain' | 'hybrid';
  centerMarker?: boolean;
  style?: any;
  apiKey: string;
}

const GoogleStaticMap: React.FC<GoogleStaticMapProps> = ({
  latitude,
  longitude,
  size,
  zoom,
  scale,
  mapFormat = 'png',
  mapType = 'roadmap',
  centerMarker = true,
  style,
  apiKey
}) => {
  const ROOT_URL = 'https://maps.googleapis.com/maps/api/staticmap';

  const getStaticMapUrl = () => {
    const { width, height } = size;
    return `${ROOT_URL}?center=${latitude},${longitude}&zoom=${zoom}&scale=${scale}&size=${width}x${height}&maptype=${mapType}&format=${mapFormat}&${getMarkerParams}&${getApiKeyParam}`;
  }

  const getMarkerParams = () => {
    const getMarkerParams = `markers=icon:dot%7Cshadow:true%7C${latitude},${longitude}`;
    return centerMarker ? getMarkerParams : '';
  }

  const getApiKeyParam = () => apiKey ? `key=${apiKey}` : '';

  return (
    <img style={style} src={getStaticMapUrl()} />
  )
}

export default GoogleStaticMap