using UmbracoQcKit.Services;
using Umbraco.Cms.Core.Composing;

namespace UmbracoQcKit.Composers;

public class RegisterServicesComposer : IComposer
{
    public void Compose(IUmbracoBuilder builder)
    {
        builder.Services.AddTransient<ISearchService, SearchService>();
    }
}