using UmbracoQcKit.Models.Search;
using UmbracoQcKit.Models.ViewModels;

namespace UmbracoQcKit.Models.ContentModels;

public class SearchPageContentModel(IPublishedContent? content) : ContentModel(content)
{
    public SearchRequestModel? SearchRequest { get; set; }
    public SearchResponseModel? SearchResponse { get; set; }
    public PaginationViewModel? Pagination { get; set; }
}
