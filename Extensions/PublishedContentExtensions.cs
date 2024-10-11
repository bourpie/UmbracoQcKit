namespace UmbracoQcKit.Extensions;

public static class PublishedContentExtensions
{
    public static Home? GetHomePage(this IPublishedContent publishedContent)
    {
        return publishedContent.AncestorOrSelf<Home>();
    }

    public static SiteSettings? GetSiteSettings(this IPublishedContent publishedContent)
    {
        var homepage = GetHomePage(publishedContent);
        if (homepage == null) return null;

        return homepage.FirstChild<SiteSettings>();
    }
}
