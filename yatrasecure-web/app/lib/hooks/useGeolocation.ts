'use client';
import { useState, useEffect } from 'react';

export interface GeoLocationState {
  lat: number | null;
  lng: number | null;
  accuracy: number | null;
  heading: number | null;
  speed: number | null;
  error: string | null;
  loading: boolean;
}

export function useGeolocation(watch: boolean = false): GeoLocationState {
  const [state, setState] = useState<GeoLocationState>({
    lat: null,
    lng: null,
    accuracy: null,
    heading: null,
    speed: null,
    error: null,
    loading: true,
  });

  useEffect(() => {
    if (typeof window === 'undefined' || !navigator.geolocation) {
      setState((prev) => ({ ...prev, error: 'Geolocation is not supported', loading: false }));
      return;
    }

    const onSuccess = (position: GeolocationPosition) => {
      setState({
        lat: position.coords.latitude,
        lng: position.coords.longitude,
        accuracy: position.coords.accuracy,
        heading: position.coords.heading,
        speed: position.coords.speed,
        error: null,
        loading: false,
      });
    };

    const onError = (error: GeolocationPositionError) => {
      setState((prev) => ({ ...prev, error: error.message, loading: false }));
    };

    let watcherId: number;
    if (watch) {
      watcherId = navigator.geolocation.watchPosition(onSuccess, onError, {
        enableHighAccuracy: true,
        timeout: 10000,
        maximumAge: 0,
      });
    } else {
      navigator.geolocation.getCurrentPosition(onSuccess, onError, {
        enableHighAccuracy: true,
      });
    }

    return () => {
      if (watch && watcherId) {
        navigator.geolocation.clearWatch(watcherId);
      }
    };
  }, [watch]);

  return state;
}
