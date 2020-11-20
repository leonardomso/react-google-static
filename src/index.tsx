import * as React from 'react';

interface GoogleStaticMapProps {
  apiKey: string;
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
  iconUrl?: string;
  style?: any;
}

const GoogleStaticMap: React.FC<GoogleStaticMapProps> = ({
  apiKey,
  latitude,
  longitude,
  size,
  zoom,
  scale,
  mapFormat = 'png',
  mapType = 'roadmap',
  iconUrl,
  style,
}) => {
  const ROOT_URL = 'https://maps.googleapis.com/maps/api/staticmap';

  const getStaticMapUrl = () => {
    const { width, height } = size;
    return `${ROOT_URL}?center=${latitude},${longitude}&zoom=${zoom}&markers=icon:${iconUrl}|${latitude},${longitude}&size=${width}x${height}&scale=${scale}&size=${width}x${height}&maptype=${mapType}&format=${mapFormat}&key=${apiKey}`;
  };

  return <img alt="google static icon" style={style} src={getStaticMapUrl()} />;
};

export default GoogleStaticMap;
