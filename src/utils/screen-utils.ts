import { Platform, StatusBar, Dimensions, PixelRatio, NativeScrollEvent } from 'react-native';
  import {AuthService} from 'react-native-auth-component';
  import remoteConfig, {
    FirebaseRemoteConfigTypes,
  } from '@react-native-firebase/remote-config';
  import I18n from 'react-native-i18n';

export const getRemoteConfig = () => {
  return remoteConfig()
    .fetchAndActivate()
    .then(() => {
      const metadata = remoteConfig().getValue('LogoutTimeForInactivity');
      if (metadata && metadata._value) {
        return Number(metadata._value);
      }
      return 0;
    })
    .catch(() => {
      return 0;
    });
};

export enum EDSDataSource {
  'api' = 1,
  'firebase' = 2,
}

export const getRemoteConfigActivatedInstance =
  async (): Promise<FirebaseRemoteConfigTypes.Module> => {
    const remoteConfigInstance = remoteConfig();

    if (remoteConfigInstance.lastFetchStatus !== 'success') {
      remoteConfigInstance.setConfigSettings({
        minimumFetchIntervalMillis: 0,
      });
      await remoteConfigInstance.fetch(0);
      await remoteConfigInstance.activate();
    }

    return remoteConfigInstance;
  };

export const getEnterpriseData = async (
  keys: string[],
  source: EDSDataSource = EDSDataSource.firebase,
) => {
  let data = [];
  
  console.log('getEnterpriseData -> source', source);

  if (source === EDSDataSource.api) {
    let appCurrentLocale = I18n.currentLocale();
    if (appCurrentLocale === 'ms') {
      appCurrentLocale = 'ms-MY';
    } else if (appCurrentLocale === 'en') {
      appCurrentLocale = 'en-US';
    }

    const response = await AuthService.getEnterpriseData(
      keys,
      appCurrentLocale,
    );
    if (response && response.data) {
      data = response.data;
    }

  } else {
    const remoteConfigInstance = await getRemoteConfigActivatedInstance();
    keys.forEach(s => {
      const values = remoteConfigInstance.getValue(s);
      if (values && values.asString().length > 0) {
        data.push(JSON.parse(values.asString()));
      }
    });
  }
  return data;
};