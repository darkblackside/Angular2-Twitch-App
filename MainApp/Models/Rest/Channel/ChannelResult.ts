import { OutputToInput } from '../DecoratorHelper'
import '../EditableDecorator';

export class ChannelResult extends OutputToInput
{
  public mature: boolean;
  @Editable
  public status: string;
  @Editable
  public broadcaster_language: string;
  @Editable
  public game: string;
  @SetIf("broadcaster_language")
  public broadcaster_language_enabled: string;
  @EditableIf("partner")
  public delay: string;
  public language: string;
  public _id: number;
  public name: string;
  public created_at: string;
  public updated_at: string;
  public logo: string;
  public banner: string;
  public video_banner: string;
  public background: string;
  public profile_banner: string;
  public profile_banner_background_color: string;
  public partner: boolean;
  public url: string;
  public views: number;
  public followers: number;
  public stream_key: string;
  public channel_feed_enabled: boolean;
}
