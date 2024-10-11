using UmbracoQcKit.Models.ViewModels;
using Microsoft.AspNetCore.Mvc;

namespace UmbracoQcKit.Components;

[ViewComponent(Name = "Contact")]
public class ContactViewComponent : ViewComponent
{
    public IViewComponentResult Invoke(ContactViewModel model)
    {
        model ??= new ContactViewModel();

        return View(model);
    }
}
