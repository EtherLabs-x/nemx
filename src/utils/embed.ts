import { EmbedBuilder, EmbedData } from "discord.js";

class Embed extends EmbedBuilder {
  constructor(data?: EmbedData) {
    super(data);
  }

  public static success(content: string): Embed {
    return new Embed()
      .setColor('#57F287')
      .setDescription(content)
      .setTimestamp()
      .setTitle('Success');
  }
  public static error(content: string): Embed {
    return new Embed()
      .setColor('#ED4245')
      .setDescription(content)
      .setTimestamp()
      .setTitle('Error');
  }
  public static info(content: string): Embed {
    return new Embed()
      .setColor('#5865F2')
      .setDescription(content)
      .setTimestamp()
      .setTitle('Information');
  }
  public static warn(content: string): Embed {
    return new Embed()
      .setColor('#FEE75C')
      .setDescription(content)
      .setTimestamp()
      .setTitle('Warning')
      .setFooter({ text: 'This is a warning, please read it carefully.' });
  }
  public static loading(content: string): Embed {
    return new Embed()
      .setColor('#FEE75C')
      .setDescription(content)
      .setTimestamp()
      .setTitle('Loading')
      .setFooter({ text: 'This may take a while...' });
  }
  /*public static custom(content: string, color: string, title: string, footer?: string): Embed {
    return new Embed()
      .setColor(color)
      .setDescription(content)
      .setTimestamp()
      .setTitle(title)
      .setFooter({ text: footer || '' });
  }*/
}

export { Embed as EmbedBuilder }