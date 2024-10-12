using UmbracoQcKit.Models.Search;
using UmbracoQcKit.Models.ViewModels;

using Microsoft.AspNetCore.Mvc;

namespace UmbracoQcKit.Components;

[ViewComponent(Name = "Pagination")]
public class PaginationViewComponent : ViewComponent
{
    public IViewComponentResult Invoke(PaginationViewModel model)
    {
        model ??= new PaginationViewModel();

        return View(model);
    }
}
