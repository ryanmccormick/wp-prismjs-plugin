import { languageMapHelper } from './language-map.helper';

describe('Language map helpers', () => {

  describe('languageMapHelper', () => {
    it('should be defined', () => {
      expect(languageMapHelper).toBeDefined();
    });

    it('should return the correct language tag', () => {
      const languageTag = languageMapHelper('vB');
      expect(languageTag).toEqual('language-vb');
    });

    it('should return markdown if a language is not found', () => {
      const languageTag = languageMapHelper('ksajndkjasd');
      expect(languageTag).toEqual('language-markdown')
    });

    it('should return markdown by default if invalid data is used as params', () => {
      // @ts-ignore
      const languageTag = languageMapHelper({lang: 'asdasd'});
      expect(languageTag).toEqual('language-markdown')
    });

    it('should return markdown by default if param is null', () => {
      // @ts-ignore
      const languageTag = languageMapHelper(null);
      expect(languageTag).toEqual('language-markdown')
    });

    it('should return markdown by default if param is undefined', () => {
      // @ts-ignore
      const languageTag = languageMapHelper();
      expect(languageTag).toEqual('language-markdown')
    });
  });
});
