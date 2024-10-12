using UmbracoQcKit.Models.Search;
using Microsoft.AspNetCore.Mvc;

namespace UmbracoQcKit.Components;

[ViewComponent(Name = "SearchResults")]
public class SearchResultsViewComponent : ViewComponent
{
    public IViewComponentResult Invoke(SearchResponseModel model)
    {
        return View(model);
    }
}
