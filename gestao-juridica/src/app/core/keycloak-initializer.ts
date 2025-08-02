import { KeycloakService } from 'keycloak-angular';

export function initializer(keycloak: KeycloakService): () => Promise<void> {
  return (): Promise<void> =>
    new Promise(async (resolve, reject) => {
      try {
        await keycloak.init({
          config: {
            url: 'http://localhost:8080/auth',
            realm: 'seu-realm',
            clientId: 'seu-cliente-id',
          },
          initOptions: { // As opções de inicialização vão aqui, dentro de initOptions
            onLoad: 'login-required',
            checkLoginIframe: false,
          },
          bearerExcludedUrls: [],
        });
        resolve();
      } catch (error) {
        reject(error);
      }
    });
}