import AgoraLogLine from '../src/entities/AgoraLogLine.js';

describe('AgoraLogLine', () => {
  const expectedString = `"MINHA CDN" GET 200 /robots.txt 100 312 HIT`;

  it('should build string with AGORA format', async () => {
    const agoraString = new AgoraLogLine(
      'MINHA CDN',
      'GET',
      200,
      '/robots.txt',
      100.2,
      312,
      'HIT',
    );

    const formattedSttring = await agoraString.toString();
    expect(formattedSttring).toBe(expectedString);
  });

  it('should fail to build string with AGORA format when pass some wrong parameter', async () => {
    const agoraString = new AgoraLogLine(
      'MINHA CDN',
      'GET',
      200,
      '/robots.txt',
      100.2,
      312,
      'MISS',
    );

    const formattedSttring = await agoraString.toString();
    expect(formattedSttring).not.toBe(expectedString);
  });
});
