using UmbracoQcKit.Configuration;
using UmbracoQcKit.Extensions;
using UmbracoQcKit.Helpers;
using UmbracoQcKit.Models.ContentModels;
using UmbracoQcKit.Models.Search;
using UmbracoQcKit.Models.ViewModels;
using UmbracoQcKit.Services;

using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.ViewEngines;
using Microsoft.Extensions.Options;

using Umbraco.Cms.Core.Web;
using Umbraco.Cms.Web.Common.Controllers;

namespace UmbracoQcKit.Controllers.Render;

public class SearchPageController(
    ILogger<RenderController> logger,
    ICompositeViewEngine compositeViewEngine,
    IUmbracoContextAccessor umbracoContextAccessor,
    IHttpContextAccessor httpContextAccessor,
    ISearchService searchService,
    IOptions<UmbracoQcKitConfig> umbracoQcKitConfig)
        : RenderController(logger, compositeViewEngine, umbracoContextAccessor)
{
    private readonly UmbracoQcKitConfig _umbracoQcKitConfig = umbracoQcKitConfig.Value;

    public override IActionResult Index()
    {
        var httpContext = httpContextAccessor.HttpContext;
        var query = httpContext?.Request.Query[Constants.QueryStrings.Query];
        var page = httpContext?.Request.Query[Constants.QueryStrings.Page];
        var tags = httpContext?.Request.Query[Constants.QueryStrings.Tags];

        if (CurrentPage == null) return BadRequest();

        var allTags = CurrentPage.GetPageTagsSelectList();

        var pageSize = _umbracoQcKitConfig?.SearchSettings?.PageSize ?? Constants.Search.DefaultPageSize;

        // Récupération de la culture courante
        var culture = httpContext?.Request.Query["culture"] ?? Thread.CurrentThread.CurrentCulture.Name;

        var searchRequest = new SearchRequestModel(query, page, pageSize, tags, allTags, culture);

        var searchResponse = searchService.Search(searchRequest);

        var pagination = new PaginationViewModel
        {
            TotalResults = searchResponse.TotalResultCount,
            TotalPages = (int)Math.Ceiling((double)(searchResponse.TotalResultCount / searchRequest.PageSize)),
            ResultsPerPage = searchRequest.PageSize,
            CurrentPage = searchRequest.Page,
            PaginationUrlFormat = PaginationHelper.GetPaginationUrlFormat(Request.Path, Request?.QueryString.ToString(), page)
        };

        var model = new SearchPageContentModel(CurrentPage)
        {
            SearchRequest = searchRequest,
            SearchResponse = searchResponse,
            Pagination = pagination
        };

        return CurrentTemplate(model);
    }

}
