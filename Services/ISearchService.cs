using UmbracoQcKit.Models.Search;

namespace UmbracoQcKit.Services;

public interface ISearchService
{
    public SearchResponseModel Search(SearchRequestModel searchRequest);
}
