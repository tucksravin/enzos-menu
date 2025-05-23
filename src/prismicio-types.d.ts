// Code generated by Slice Machine. DO NOT EDIT.

import type * as prismic from "@prismicio/client";

type Simplify<T> = { [KeyType in keyof T]: T[KeyType] };

/**
 * Item in *Page → regular menu items*
 */
export interface PageDocumentDataMenuItemsItem {
  /**
   * name field in *Page → regular menu items*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: page.menu_items[].name
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  name: prismic.KeyTextField;

  /**
   * description field in *Page → regular menu items*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: page.menu_items[].description
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  description: prismic.RichTextField;

  /**
   * time field in *Page → regular menu items*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: page.menu_items[].time
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  time: prismic.KeyTextField;

  /**
   * cost field in *Page → regular menu items*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: page.menu_items[].cost
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  cost: prismic.KeyTextField;

  /**
   * image field in *Page → regular menu items*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: page.menu_items[].image
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  image: prismic.ImageField<never>;
}

/**
 * Item in *Page → featured items*
 */
export interface PageDocumentDataFeaturedItemsItem {
  /**
   * name field in *Page → featured items*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: page.featured_items[].name
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  name: prismic.KeyTextField;

  /**
   * description field in *Page → featured items*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: page.featured_items[].description
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  description: prismic.RichTextField;

  /**
   * time field in *Page → featured items*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: page.featured_items[].time
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  time: prismic.KeyTextField;

  /**
   * cost field in *Page → featured items*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: page.featured_items[].cost
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  cost: prismic.KeyTextField;

  /**
   * image field in *Page → featured items*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: page.featured_items[].image
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  image: prismic.ImageField<never>;
}

type PageDocumentDataSlicesSlice = never;

/**
 * Content for Page documents
 */
interface PageDocumentData {
  /**
   * Title field in *Page*
   *
   * - **Field Type**: Title
   * - **Placeholder**: *None*
   * - **API ID Path**: page.title
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  title: prismic.TitleField;

  /**
   * regular menu items field in *Page*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: page.menu_items[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  menu_items: prismic.GroupField<Simplify<PageDocumentDataMenuItemsItem>>;

  /**
   * featured items field in *Page*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: page.featured_items[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  featured_items: prismic.GroupField<
    Simplify<PageDocumentDataFeaturedItemsItem>
  >;

  /**
   * Slice Zone field in *Page*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: page.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<PageDocumentDataSlicesSlice> /**
   * Meta Title field in *Page*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A title of the page used for social media and search engines
   * - **API ID Path**: page.meta_title
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */;
  meta_title: prismic.KeyTextField;

  /**
   * Meta Description field in *Page*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A brief summary of the page
   * - **API ID Path**: page.meta_description
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  meta_description: prismic.KeyTextField;

  /**
   * Meta Image field in *Page*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: page.meta_image
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  meta_image: prismic.ImageField<never>;
}

/**
 * Page document from Prismic
 *
 * - **API ID**: `page`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type PageDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithUID<Simplify<PageDocumentData>, "page", Lang>;

export type AllDocumentTypes = PageDocument;

/**
 * Primary content in *ContentWidth → Single Col Text → Primary*
 */
export interface ContentWidthMediaSliceDefaultPrimary {
  /**
   * title field in *ContentWidth → Single Col Text → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: content_width_media.default.primary.title
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  title: prismic.RichTextField;

  /**
   * icon field in *ContentWidth → Single Col Text → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: content_width_media.default.primary.icon
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  icon: prismic.ImageField<never>;

  /**
   * top text field in *ContentWidth → Single Col Text → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: content_width_media.default.primary.top_text
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  top_text: prismic.RichTextField;

  /**
   * middle text field in *ContentWidth → Single Col Text → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: content_width_media.default.primary.middle_text
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  middle_text: prismic.RichTextField;

  /**
   * bottom text field in *ContentWidth → Single Col Text → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: content_width_media.default.primary.bottom_text
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  bottom_text: prismic.RichTextField;

  /**
   * button one text field in *ContentWidth → Single Col Text → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: content_width_media.default.primary.button_one_text
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  button_one_text: prismic.KeyTextField;

  /**
   * button one link field in *ContentWidth → Single Col Text → Primary*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: content_width_media.default.primary.button_one_link
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  button_one_link: prismic.LinkField<
    string,
    string,
    unknown,
    prismic.FieldState,
    never
  >;

  /**
   * button two text field in *ContentWidth → Single Col Text → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: content_width_media.default.primary.button_two_text
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  button_two_text: prismic.KeyTextField;

  /**
   * button two link field in *ContentWidth → Single Col Text → Primary*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: content_width_media.default.primary.button_two_link
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  button_two_link: prismic.LinkField<
    string,
    string,
    unknown,
    prismic.FieldState,
    never
  >;

  /**
   * background color field in *ContentWidth → Single Col Text → Primary*
   *
   * - **Field Type**: Color
   * - **Placeholder**: *None*
   * - **API ID Path**: content_width_media.default.primary.background_color
   * - **Documentation**: https://prismic.io/docs/field#color
   */
  background_color: prismic.ColorField;

  /**
   * background_image field in *ContentWidth → Single Col Text → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: content_width_media.default.primary.background_image
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  background_image: prismic.ImageField<never>;

  /**
   * text float field in *ContentWidth → Single Col Text → Primary*
   *
   * - **Field Type**: Select
   * - **Placeholder**: *None*
   * - **Default Value**: left
   * - **API ID Path**: content_width_media.default.primary.text_float
   * - **Documentation**: https://prismic.io/docs/field#select
   */
  text_float: prismic.SelectField<"left" | "right" | "center", "filled">;

  /**
   * text box position vertical field in *ContentWidth → Single Col Text → Primary*
   *
   * - **Field Type**: Select
   * - **Placeholder**: *None*
   * - **Default Value**: top
   * - **API ID Path**: content_width_media.default.primary.text_box_position_vertical
   * - **Documentation**: https://prismic.io/docs/field#select
   */
  text_box_position_vertical: prismic.SelectField<
    "top" | "bottom" | "center",
    "filled"
  >;

  /**
   * text box position horizontal field in *ContentWidth → Single Col Text → Primary*
   *
   * - **Field Type**: Select
   * - **Placeholder**: *None*
   * - **Default Value**: left
   * - **API ID Path**: content_width_media.default.primary.text_box_position_horizontal
   * - **Documentation**: https://prismic.io/docs/field#select
   */
  text_box_position_horizontal: prismic.SelectField<
    "left" | "right" | "center",
    "filled"
  >;

  /**
   * vimeo_id field in *ContentWidth → Single Col Text → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: content_width_media.default.primary.vimeo_id
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  vimeo_id: prismic.KeyTextField;

  /**
   * loopVideo field in *ContentWidth → Single Col Text → Primary*
   *
   * - **Field Type**: Boolean
   * - **Placeholder**: *None*
   * - **Default Value**: false
   * - **API ID Path**: content_width_media.default.primary.loopvideo
   * - **Documentation**: https://prismic.io/docs/field#boolean
   */
  loopvideo: prismic.BooleanField;
}

/**
 * Single Col Text variation for ContentWidth Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type ContentWidthMediaSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<ContentWidthMediaSliceDefaultPrimary>,
  never
>;

/**
 * Primary content in *ContentWidth → Text Slider Left - Image Right → Primary*
 */
export interface ContentWidthMediaSliceSliderLeftImageRightPrimary {
  /**
   * background color field in *ContentWidth → Text Slider Left - Image Right → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: content_width_media.sliderLeftImageRight.primary.background_color
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  background_color: prismic.KeyTextField;

  /**
   * image right field in *ContentWidth → Text Slider Left - Image Right → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: content_width_media.sliderLeftImageRight.primary.image_right
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  image_right: prismic.ImageField<never>;

  /**
   * vimeo_id field in *ContentWidth → Text Slider Left - Image Right → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: content_width_media.sliderLeftImageRight.primary.vimeo_id
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  vimeo_id: prismic.KeyTextField;

  /**
   * loopVideo field in *ContentWidth → Text Slider Left - Image Right → Primary*
   *
   * - **Field Type**: Boolean
   * - **Placeholder**: *None*
   * - **Default Value**: false
   * - **API ID Path**: content_width_media.sliderLeftImageRight.primary.loopvideo
   * - **Documentation**: https://prismic.io/docs/field#boolean
   */
  loopvideo: prismic.BooleanField;
}

/**
 * Primary content in *ContentWidth → Items*
 */
export interface ContentWidthMediaSliceSliderLeftImageRightItem {
  /**
   * icon field in *ContentWidth → Items*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: content_width_media.items[].icon
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  icon: prismic.ImageField<never>;

  /**
   * top text field in *ContentWidth → Items*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: content_width_media.items[].top_text
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  top_text: prismic.RichTextField;

  /**
   * middle text field in *ContentWidth → Items*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: content_width_media.items[].middle_text
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  middle_text: prismic.RichTextField;

  /**
   * bottom text field in *ContentWidth → Items*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: content_width_media.items[].bottom_text
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  bottom_text: prismic.RichTextField;

  /**
   * button one text field in *ContentWidth → Items*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: content_width_media.items[].button_one_text
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  button_one_text: prismic.KeyTextField;

  /**
   * button one link field in *ContentWidth → Items*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: content_width_media.items[].button_one_link
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  button_one_link: prismic.LinkField<
    string,
    string,
    unknown,
    prismic.FieldState,
    never
  >;

  /**
   * button two text field in *ContentWidth → Items*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: content_width_media.items[].button_two_text
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  button_two_text: prismic.KeyTextField;

  /**
   * button two link field in *ContentWidth → Items*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: content_width_media.items[].button_two_link
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  button_two_link: prismic.LinkField<
    string,
    string,
    unknown,
    prismic.FieldState,
    never
  >;
}

/**
 * Text Slider Left - Image Right variation for ContentWidth Slice
 *
 * - **API ID**: `sliderLeftImageRight`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type ContentWidthMediaSliceSliderLeftImageRight =
  prismic.SharedSliceVariation<
    "sliderLeftImageRight",
    Simplify<ContentWidthMediaSliceSliderLeftImageRightPrimary>,
    Simplify<ContentWidthMediaSliceSliderLeftImageRightItem>
  >;

/**
 * Primary content in *ContentWidth → Two Col Image and Text → Primary*
 */
export interface ContentWidthMediaSliceTwoColImageAndTextPrimary {
  /**
   * icon field in *ContentWidth → Two Col Image and Text → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: content_width_media.twoColImageAndText.primary.icon
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  icon: prismic.ImageField<never>;

  /**
   * top text field in *ContentWidth → Two Col Image and Text → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: content_width_media.twoColImageAndText.primary.top_text
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  top_text: prismic.RichTextField;

  /**
   * middle text field in *ContentWidth → Two Col Image and Text → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: content_width_media.twoColImageAndText.primary.middle_text
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  middle_text: prismic.RichTextField;

  /**
   * bottom text field in *ContentWidth → Two Col Image and Text → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: content_width_media.twoColImageAndText.primary.bottom_text
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  bottom_text: prismic.RichTextField;

  /**
   * button one text field in *ContentWidth → Two Col Image and Text → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: content_width_media.twoColImageAndText.primary.button_one_text
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  button_one_text: prismic.KeyTextField;

  /**
   * button one link field in *ContentWidth → Two Col Image and Text → Primary*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: content_width_media.twoColImageAndText.primary.button_one_link
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  button_one_link: prismic.LinkField<
    string,
    string,
    unknown,
    prismic.FieldState,
    never
  >;

  /**
   * button two text field in *ContentWidth → Two Col Image and Text → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: content_width_media.twoColImageAndText.primary.button_two_text
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  button_two_text: prismic.KeyTextField;

  /**
   * button two link field in *ContentWidth → Two Col Image and Text → Primary*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: content_width_media.twoColImageAndText.primary.button_two_link
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  button_two_link: prismic.LinkField<
    string,
    string,
    unknown,
    prismic.FieldState,
    never
  >;

  /**
   * background color field in *ContentWidth → Two Col Image and Text → Primary*
   *
   * - **Field Type**: Color
   * - **Placeholder**: *None*
   * - **API ID Path**: content_width_media.twoColImageAndText.primary.background_color
   * - **Documentation**: https://prismic.io/docs/field#color
   */
  background_color: prismic.ColorField;

  /**
   * background_image field in *ContentWidth → Two Col Image and Text → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: content_width_media.twoColImageAndText.primary.background_image
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  background_image: prismic.ImageField<never>;

  /**
   * text float field in *ContentWidth → Two Col Image and Text → Primary*
   *
   * - **Field Type**: Select
   * - **Placeholder**: *None*
   * - **Default Value**: left
   * - **API ID Path**: content_width_media.twoColImageAndText.primary.text_float
   * - **Documentation**: https://prismic.io/docs/field#select
   */
  text_float: prismic.SelectField<"left" | "right" | "center", "filled">;

  /**
   * text box position vertical field in *ContentWidth → Two Col Image and Text → Primary*
   *
   * - **Field Type**: Select
   * - **Placeholder**: *None*
   * - **Default Value**: top
   * - **API ID Path**: content_width_media.twoColImageAndText.primary.text_box_position_vertical
   * - **Documentation**: https://prismic.io/docs/field#select
   */
  text_box_position_vertical: prismic.SelectField<
    "top" | "bottom" | "center",
    "filled"
  >;

  /**
   * text box position horizontal field in *ContentWidth → Two Col Image and Text → Primary*
   *
   * - **Field Type**: Select
   * - **Placeholder**: *None*
   * - **Default Value**: left
   * - **API ID Path**: content_width_media.twoColImageAndText.primary.text_box_position_horizontal
   * - **Documentation**: https://prismic.io/docs/field#select
   */
  text_box_position_horizontal: prismic.SelectField<
    "left" | "right" | "center",
    "filled"
  >;

  /**
   * vimeo_id field in *ContentWidth → Two Col Image and Text → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: content_width_media.twoColImageAndText.primary.vimeo_id
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  vimeo_id: prismic.KeyTextField;

  /**
   * loopVideo field in *ContentWidth → Two Col Image and Text → Primary*
   *
   * - **Field Type**: Boolean
   * - **Placeholder**: *None*
   * - **Default Value**: false
   * - **API ID Path**: content_width_media.twoColImageAndText.primary.loopvideo
   * - **Documentation**: https://prismic.io/docs/field#boolean
   */
  loopvideo: prismic.BooleanField;

  /**
   * image sides field in *ContentWidth → Two Col Image and Text → Primary*
   *
   * - **Field Type**: Boolean
   * - **Placeholder**: *None*
   * - **Default Value**: true
   * - **API ID Path**: content_width_media.twoColImageAndText.primary.image_sides
   * - **Documentation**: https://prismic.io/docs/field#boolean
   */
  image_sides: prismic.BooleanField;
}

/**
 * Two Col Image and Text variation for ContentWidth Slice
 *
 * - **API ID**: `twoColImageAndText`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type ContentWidthMediaSliceTwoColImageAndText =
  prismic.SharedSliceVariation<
    "twoColImageAndText",
    Simplify<ContentWidthMediaSliceTwoColImageAndTextPrimary>,
    never
  >;

/**
 * Slice variation for *ContentWidth*
 */
type ContentWidthMediaSliceVariation =
  | ContentWidthMediaSliceDefault
  | ContentWidthMediaSliceSliderLeftImageRight
  | ContentWidthMediaSliceTwoColImageAndText;

/**
 * ContentWidth Shared Slice
 *
 * - **API ID**: `content_width_media`
 * - **Description**: ContentWidthMedia
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type ContentWidthMediaSlice = prismic.SharedSlice<
  "content_width_media",
  ContentWidthMediaSliceVariation
>;

/**
 * Primary content in *Hero → Default → Primary*
 */
export interface HeroSliceDefaultPrimary {
  /**
   * logo field in *Hero → Default → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.default.primary.logo
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  logo: prismic.ImageField<never>;

  /**
   * background image field in *Hero → Default → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.default.primary.background_image
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  background_image: prismic.ImageField<"desktop">;

  /**
   * vimeo id field in *Hero → Default → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.default.primary.vimeo_id
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  vimeo_id: prismic.KeyTextField;

  /**
   * top text field in *Hero → Default → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.default.primary.top_text
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  top_text: prismic.RichTextField;

  /**
   * middle text field in *Hero → Default → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.default.primary.middle_text
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  middle_text: prismic.RichTextField;

  /**
   * bottom text field in *Hero → Default → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.default.primary.bottom_text
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  bottom_text: prismic.RichTextField;

  /**
   * button one text field in *Hero → Default → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.default.primary.button_one_text
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  button_one_text: prismic.KeyTextField;

  /**
   * button one link field in *Hero → Default → Primary*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.default.primary.button_one_link
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  button_one_link: prismic.LinkField<
    string,
    string,
    unknown,
    prismic.FieldState,
    never
  >;

  /**
   * button two text field in *Hero → Default → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.default.primary.button_two_text
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  button_two_text: prismic.KeyTextField;

  /**
   * button two link field in *Hero → Default → Primary*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.default.primary.button_two_link
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  button_two_link: prismic.LinkField<
    string,
    string,
    unknown,
    prismic.FieldState,
    never
  >;

  /**
   * text box float field in *Hero → Default → Primary*
   *
   * - **Field Type**: Select
   * - **Placeholder**: *None*
   * - **Default Value**: left
   * - **API ID Path**: hero.default.primary.text_box_float
   * - **Documentation**: https://prismic.io/docs/field#select
   */
  text_box_float: prismic.SelectField<"left" | "right" | "center", "filled">;

  /**
   * text box vertical align field in *Hero → Default → Primary*
   *
   * - **Field Type**: Select
   * - **Placeholder**: *None*
   * - **Default Value**: top
   * - **API ID Path**: hero.default.primary.text_box_vertical_align
   * - **Documentation**: https://prismic.io/docs/field#select
   */
  text_box_vertical_align: prismic.SelectField<
    "top" | "bottom" | "center",
    "filled"
  >;

  /**
   * text justify field in *Hero → Default → Primary*
   *
   * - **Field Type**: Select
   * - **Placeholder**: *None*
   * - **Default Value**: left
   * - **API ID Path**: hero.default.primary.text_align
   * - **Documentation**: https://prismic.io/docs/field#select
   */
  text_align: prismic.SelectField<"left" | "right" | "center", "filled">;
}

/**
 * Default variation for Hero Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type HeroSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<HeroSliceDefaultPrimary>,
  never
>;

/**
 * Primary content in *Hero → slider → Primary*
 */
export interface HeroSliceSliderPrimary {
  /**
   * logo field in *Hero → slider → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.slider.primary.logo
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  logo: prismic.ImageField<never>;

  /**
   * top text field in *Hero → slider → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.slider.primary.top_text
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  top_text: prismic.RichTextField;

  /**
   * middle text field in *Hero → slider → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.slider.primary.middle_text
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  middle_text: prismic.RichTextField;

  /**
   * bottom text field in *Hero → slider → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.slider.primary.bottom_text
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  bottom_text: prismic.RichTextField;

  /**
   * button one text field in *Hero → slider → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.slider.primary.button_one_text
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  button_one_text: prismic.KeyTextField;

  /**
   * button one link field in *Hero → slider → Primary*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.slider.primary.button_one_link
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  button_one_link: prismic.LinkField<
    string,
    string,
    unknown,
    prismic.FieldState,
    never
  >;

  /**
   * button two text field in *Hero → slider → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.slider.primary.button_two_text
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  button_two_text: prismic.KeyTextField;

  /**
   * button two link field in *Hero → slider → Primary*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.slider.primary.button_two_link
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  button_two_link: prismic.LinkField<
    string,
    string,
    unknown,
    prismic.FieldState,
    never
  >;

  /**
   * text box float field in *Hero → slider → Primary*
   *
   * - **Field Type**: Select
   * - **Placeholder**: *None*
   * - **Default Value**: left
   * - **API ID Path**: hero.slider.primary.text_box_float
   * - **Documentation**: https://prismic.io/docs/field#select
   */
  text_box_float: prismic.SelectField<"left" | "right" | "center", "filled">;

  /**
   * text box vertical align field in *Hero → slider → Primary*
   *
   * - **Field Type**: Select
   * - **Placeholder**: *None*
   * - **Default Value**: top
   * - **API ID Path**: hero.slider.primary.text_box_vertical_align
   * - **Documentation**: https://prismic.io/docs/field#select
   */
  text_box_vertical_align: prismic.SelectField<
    "top" | "bottom" | "center",
    "filled"
  >;

  /**
   * text justify field in *Hero → slider → Primary*
   *
   * - **Field Type**: Select
   * - **Placeholder**: *None*
   * - **Default Value**: left
   * - **API ID Path**: hero.slider.primary.text_align
   * - **Documentation**: https://prismic.io/docs/field#select
   */
  text_align: prismic.SelectField<"left" | "right" | "center", "filled">;
}

/**
 * Primary content in *Hero → Items*
 */
export interface HeroSliceSliderItem {
  /**
   * background_image field in *Hero → Items*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.items[].backgorund_image
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  backgorund_image: prismic.ImageField<"desktop">;

  /**
   * vimeo_id field in *Hero → Items*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.items[].vimeo_id
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  vimeo_id: prismic.KeyTextField;
}

/**
 * slider variation for Hero Slice
 *
 * - **API ID**: `slider`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type HeroSliceSlider = prismic.SharedSliceVariation<
  "slider",
  Simplify<HeroSliceSliderPrimary>,
  Simplify<HeroSliceSliderItem>
>;

/**
 * Slice variation for *Hero*
 */
type HeroSliceVariation = HeroSliceDefault | HeroSliceSlider;

/**
 * Hero Shared Slice
 *
 * - **API ID**: `hero`
 * - **Description**: Hero
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type HeroSlice = prismic.SharedSlice<"hero", HeroSliceVariation>;

/**
 * Primary content in *RichText → Default → Primary*
 */
export interface RichTextSliceDefaultPrimary {
  /**
   * Content field in *RichText → Default → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: Lorem ipsum...
   * - **API ID Path**: rich_text.default.primary.content
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  content: prismic.RichTextField;
}

/**
 * Default variation for RichText Slice
 *
 * - **API ID**: `default`
 * - **Description**: RichText
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type RichTextSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<RichTextSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *RichText*
 */
type RichTextSliceVariation = RichTextSliceDefault;

/**
 * RichText Shared Slice
 *
 * - **API ID**: `rich_text`
 * - **Description**: RichText
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type RichTextSlice = prismic.SharedSlice<
  "rich_text",
  RichTextSliceVariation
>;

declare module "@prismicio/client" {
  interface CreateClient {
    (
      repositoryNameOrEndpoint: string,
      options?: prismic.ClientConfig,
    ): prismic.Client<AllDocumentTypes>;
  }

  interface CreateWriteClient {
    (
      repositoryNameOrEndpoint: string,
      options: prismic.WriteClientConfig,
    ): prismic.WriteClient<AllDocumentTypes>;
  }

  interface CreateMigration {
    (): prismic.Migration<AllDocumentTypes>;
  }

  namespace Content {
    export type {
      PageDocument,
      PageDocumentData,
      PageDocumentDataMenuItemsItem,
      PageDocumentDataFeaturedItemsItem,
      PageDocumentDataSlicesSlice,
      AllDocumentTypes,
      ContentWidthMediaSlice,
      ContentWidthMediaSliceDefaultPrimary,
      ContentWidthMediaSliceSliderLeftImageRightPrimary,
      ContentWidthMediaSliceSliderLeftImageRightItem,
      ContentWidthMediaSliceTwoColImageAndTextPrimary,
      ContentWidthMediaSliceVariation,
      ContentWidthMediaSliceDefault,
      ContentWidthMediaSliceSliderLeftImageRight,
      ContentWidthMediaSliceTwoColImageAndText,
      HeroSlice,
      HeroSliceDefaultPrimary,
      HeroSliceSliderPrimary,
      HeroSliceSliderItem,
      HeroSliceVariation,
      HeroSliceDefault,
      HeroSliceSlider,
      RichTextSlice,
      RichTextSliceDefaultPrimary,
      RichTextSliceVariation,
      RichTextSliceDefault,
    };
  }
}
