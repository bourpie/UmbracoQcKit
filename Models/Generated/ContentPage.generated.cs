//------------------------------------------------------------------------------
// <auto-generated>
//   This code was generated by a tool.
//
//    Umbraco.ModelsBuilder.Embedded v13.5.1+2e068bb
//
//   Changes to this file will be lost if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

using System;
using System.Linq.Expressions;
using Umbraco.Cms.Core.Models.PublishedContent;
using Umbraco.Cms.Core.PublishedCache;
using Umbraco.Cms.Infrastructure.ModelsBuilder;
using Umbraco.Cms.Core;
using Umbraco.Extensions;

namespace Umbraco.Cms.Web.Common.PublishedModels
{
	/// <summary>Content page</summary>
	[PublishedModel("contentPage")]
	public partial class ContentPage : PublishedContentModel, IContentProperties, IHeaderProperties, ISEoproperties, ITaggingProperties, IVisibilityProperties
	{
		// helpers
#pragma warning disable 0109 // new is redundant
		[global::System.CodeDom.Compiler.GeneratedCodeAttribute("Umbraco.ModelsBuilder.Embedded", "13.5.1+2e068bb")]
		public new const string ModelTypeAlias = "contentPage";
		[global::System.CodeDom.Compiler.GeneratedCodeAttribute("Umbraco.ModelsBuilder.Embedded", "13.5.1+2e068bb")]
		public new const PublishedItemType ModelItemType = PublishedItemType.Content;
		[global::System.CodeDom.Compiler.GeneratedCodeAttribute("Umbraco.ModelsBuilder.Embedded", "13.5.1+2e068bb")]
		[return: global::System.Diagnostics.CodeAnalysis.MaybeNull]
		public new static IPublishedContentType GetModelContentType(IPublishedSnapshotAccessor publishedSnapshotAccessor)
			=> PublishedModelUtility.GetModelContentType(publishedSnapshotAccessor, ModelItemType, ModelTypeAlias);
		[global::System.CodeDom.Compiler.GeneratedCodeAttribute("Umbraco.ModelsBuilder.Embedded", "13.5.1+2e068bb")]
		[return: global::System.Diagnostics.CodeAnalysis.MaybeNull]
		public static IPublishedPropertyType GetModelPropertyType<TValue>(IPublishedSnapshotAccessor publishedSnapshotAccessor, Expression<Func<ContentPage, TValue>> selector)
			=> PublishedModelUtility.GetModelPropertyType(GetModelContentType(publishedSnapshotAccessor), selector);
#pragma warning restore 0109

		private IPublishedValueFallback _publishedValueFallback;

		// ctor
		public ContentPage(IPublishedContent content, IPublishedValueFallback publishedValueFallback)
			: base(content, publishedValueFallback)
		{
			_publishedValueFallback = publishedValueFallback;
		}

		// properties

		///<summary>
		/// Main Content
		///</summary>
		[global::System.CodeDom.Compiler.GeneratedCodeAttribute("Umbraco.ModelsBuilder.Embedded", "13.5.1+2e068bb")]
		[global::System.Diagnostics.CodeAnalysis.MaybeNull]
		[ImplementPropertyType("mainContent")]
		public virtual string MainContent => global::Umbraco.Cms.Web.Common.PublishedModels.ContentProperties.GetMainContent(this, _publishedValueFallback);

		///<summary>
		/// Header Content
		///</summary>
		[global::System.CodeDom.Compiler.GeneratedCodeAttribute("Umbraco.ModelsBuilder.Embedded", "13.5.1+2e068bb")]
		[global::System.Diagnostics.CodeAnalysis.MaybeNull]
		[ImplementPropertyType("headerContent")]
		public virtual string HeaderContent => global::Umbraco.Cms.Web.Common.PublishedModels.HeaderProperties.GetHeaderContent(this, _publishedValueFallback);

		///<summary>
		/// Is Followable
		///</summary>
		[global::System.CodeDom.Compiler.GeneratedCodeAttribute("Umbraco.ModelsBuilder.Embedded", "13.5.1+2e068bb")]
		[ImplementPropertyType("isFollowable")]
		public virtual bool IsFollowable => global::Umbraco.Cms.Web.Common.PublishedModels.SEoproperties.GetIsFollowable(this, _publishedValueFallback);

		///<summary>
		/// Is Indexable
		///</summary>
		[global::System.CodeDom.Compiler.GeneratedCodeAttribute("Umbraco.ModelsBuilder.Embedded", "13.5.1+2e068bb")]
		[ImplementPropertyType("isIndexable")]
		public virtual bool IsIndexable => global::Umbraco.Cms.Web.Common.PublishedModels.SEoproperties.GetIsIndexable(this, _publishedValueFallback);

		///<summary>
		/// Meta Description
		///</summary>
		[global::System.CodeDom.Compiler.GeneratedCodeAttribute("Umbraco.ModelsBuilder.Embedded", "13.5.1+2e068bb")]
		[global::System.Diagnostics.CodeAnalysis.MaybeNull]
		[ImplementPropertyType("metaDescription")]
		public virtual string MetaDescription => global::Umbraco.Cms.Web.Common.PublishedModels.SEoproperties.GetMetaDescription(this, _publishedValueFallback);

		///<summary>
		/// Meta Title
		///</summary>
		[global::System.CodeDom.Compiler.GeneratedCodeAttribute("Umbraco.ModelsBuilder.Embedded", "13.5.1+2e068bb")]
		[global::System.Diagnostics.CodeAnalysis.MaybeNull]
		[ImplementPropertyType("metaTitle")]
		public virtual string MetaTitle => global::Umbraco.Cms.Web.Common.PublishedModels.SEoproperties.GetMetaTitle(this, _publishedValueFallback);

		///<summary>
		/// Page Tags
		///</summary>
		[global::System.CodeDom.Compiler.GeneratedCodeAttribute("Umbraco.ModelsBuilder.Embedded", "13.5.1+2e068bb")]
		[global::System.Diagnostics.CodeAnalysis.MaybeNull]
		[ImplementPropertyType("pageTags")]
		public virtual global::System.Collections.Generic.IEnumerable<global::Umbraco.Cms.Core.Models.PublishedContent.IPublishedContent> PageTags => global::Umbraco.Cms.Web.Common.PublishedModels.TaggingProperties.GetPageTags(this, _publishedValueFallback);

		///<summary>
		/// Hide: Rendre invisible sur le site et à la recherche
		///</summary>
		[global::System.CodeDom.Compiler.GeneratedCodeAttribute("Umbraco.ModelsBuilder.Embedded", "13.5.1+2e068bb")]
		[ImplementPropertyType("umbracoNaviHide")]
		public virtual bool UmbracoNaviHide => global::Umbraco.Cms.Web.Common.PublishedModels.VisibilityProperties.GetUmbracoNaviHide(this, _publishedValueFallback);
	}
}
