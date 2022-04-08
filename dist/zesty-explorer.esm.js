import React from 'react';
import ReactJson from 'react-json-view-ssr';
import Fuse from 'fuse.js';

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

  return arr2;
}

function _createForOfIteratorHelperLoose(o, allowArrayLike) {
  var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
  if (it) return (it = it.call(o)).next.bind(it);

  if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
    if (it) o = it;
    var i = 0;
    return function () {
      if (i >= o.length) return {
        done: true
      };
      return {
        done: false,
        value: o[i++]
      };
    };
  }

  throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

var dummydata = {
  hero_h1: 'Integrate Next.JS seamlessly',
  hero_description: 'Zesty.io is the open-source, flexible API headless CMS to integrate with NextJS. Start your next project with just one line of code.',
  cta_primary_text: null,
  cta_secondary_text: null,
  integration_benefits_h2: 'Zesty and Next: A Powerful Combination',
  integration_benefits: null,
  feature_description_1: '',
  feature_description_2: null,
  feature_description_3: '<p dir="ltr">The benefits extend to your marketing team as well:</p>\n<ul>\n<li dir="ltr" style="list-style-type: disc;" aria-level="1">\n<p dir="ltr" role="presentation">Marketers can fully control SEO components including the URL path without affecting the developer workflow</p>\n</li>\n<li dir="ltr" style="list-style-type: disc;" aria-level="1">\n<p dir="ltr" role="presentation">Leveraging NextJS server-side rendering means marketers gain a live preview for stage and development environments</p>\n</li>\n<li dir="ltr" style="list-style-type: disc;" aria-level="1">\n<p dir="ltr" role="presentation">Leveraging NextJS server-side rendering also means production can be automatically updated by marketers without waiting for a build process</p>\n</li>\n<li dir="ltr" style="list-style-type: disc;" aria-level="1">\n<p dir="ltr" role="presentation">Zesty enables marketer previews inside of the content management system - this can be done using Google Cloud, AWS or Vercel</p>\n</li>\n</ul>',
  testimonial: null,
  logos_title: 'Join top companies',
  logos: {
    type: 'relationship',
    model: 'customer_brands',
    totalItems: 5,
    data: [{
      customer_name: 'Sony-homepage',
      customer_logo: {
        type: 'images',
        totalItems: 1,
        data: [{
          type: 'image',
          zuid: '3-d959bc7-wnj9b8',
          url: 'https://kfg6bckb.media.zestyio.com/Sony-homepage150x50-fullcolor.png'
        }]
      },
      homepage_sort: '1',
      background_image: null,
      customer_story_download: null,
      customer_story_short: null,
      products_in_use: null,
      customer_story_short_raw: null,
      featured: '1',
      customer_sort: '1',
      url: null,
      grey_logo: {
        type: 'images',
        totalItems: 1,
        data: [{
          type: 'image',
          zuid: '3-d959bc7-0xs8gd',
          url: 'https://kfg6bckb.media.zestyio.com/Sony-homepage150x50-grey.png'
        }]
      },
      white_logo: {
        type: 'images',
        totalItems: 1,
        data: [{
          type: 'image',
          zuid: '3-d95a31f-485ggg',
          url: 'https://kfg6bckb.media.zestyio.com/sony-white.png'
        }]
      },
      meta: {
        type: 'item',
        model_name: 'customer_brands',
        model_alternate_name: 'CustomerBrand',
        zuid: '7-c28c9fc9b1-st2xwm',
        createdAt: '2022-03-22 20:27:17',
        updatedAt: '2022-03-22 20:27:16',
        listed: '1',
        version: '3',
        locale: {
          id: '1',
          name: 'English (United States)',
          code: 'en-US',
          "default": '1',
          active: '1',
          enabled: '1'
        },
        model: {
          type: 'model',
          zuid: '6-0888e8-0rv8xh',
          name: 'customer_brands',
          label: 'Customers',
          resourceURI: 'https://www.zesty.io/-/instant/6-0888e8-0rv8xh.json'
        }
      }
    }, {
      customer_name: 'Rocket League-homepage',
      customer_logo: {
        type: 'images',
        totalItems: 1,
        data: [{
          type: 'image',
          zuid: '3-d9ffb35-46szwl',
          url: 'https://kfg6bckb.media.zestyio.com/RL-black.H164YWM79.png'
        }]
      },
      homepage_sort: '1',
      background_image: null,
      customer_story_download: null,
      customer_story_short: null,
      products_in_use: null,
      customer_story_short_raw: null,
      featured: '1',
      customer_sort: '1',
      url: null,
      grey_logo: {
        type: 'images',
        totalItems: 1,
        data: [{
          type: 'image',
          zuid: '3-d9ffb3c-k8d6js',
          url: 'https://kfg6bckb.media.zestyio.com/RL-grey.png'
        }]
      },
      white_logo: {
        type: 'images',
        totalItems: 1,
        data: [{
          type: 'image',
          zuid: '3-d9ffb41-684jph',
          url: 'https://kfg6bckb.media.zestyio.com/RL-white.png'
        }]
      },
      meta: {
        type: 'item',
        model_name: 'customer_brands',
        model_alternate_name: 'CustomerBrand',
        zuid: '7-9ce7fddc9f-bqrt2r',
        createdAt: '2022-03-30 16:45:56',
        updatedAt: '2022-03-30 16:45:55',
        listed: '1',
        version: '5',
        locale: {
          id: '1',
          name: 'English (United States)',
          code: 'en-US',
          "default": '1',
          active: '1',
          enabled: '1'
        },
        model: {
          type: 'model',
          zuid: '6-0888e8-0rv8xh',
          name: 'customer_brands',
          label: 'Customers',
          resourceURI: 'https://www.zesty.io/-/instant/6-0888e8-0rv8xh.json'
        }
      }
    }, {
      customer_name: 'Wattpad-homepage',
      customer_logo: {
        type: 'images',
        totalItems: 1,
        data: [{
          type: 'image',
          zuid: '3-d959b5d-6q0prf',
          url: 'https://kfg6bckb.media.zestyio.com/Wattpad-homepage150x50-fullcolor.png'
        }]
      },
      homepage_sort: '1',
      background_image: null,
      customer_story_download: null,
      customer_story_short: null,
      products_in_use: null,
      customer_story_short_raw: null,
      featured: '1',
      customer_sort: '1',
      url: null,
      grey_logo: {
        type: 'images',
        totalItems: 1,
        data: [{
          type: 'image',
          zuid: '3-d959b5d-0xvjnf',
          url: 'https://kfg6bckb.media.zestyio.com/Wattpad-homepage150x50-grey.png'
        }]
      },
      white_logo: {
        type: 'images',
        totalItems: 1,
        data: [{
          type: 'image',
          zuid: '3-d95a442-b0kk0d',
          url: 'https://kfg6bckb.media.zestyio.com/wattpad-white.png'
        }]
      },
      meta: {
        type: 'item',
        model_name: 'customer_brands',
        model_alternate_name: 'CustomerBrand',
        zuid: '7-dcf592b5fe-nz9r3t',
        createdAt: '2022-03-22 20:32:09',
        updatedAt: '2022-03-22 20:32:08',
        listed: '1',
        version: '3',
        locale: {
          id: '1',
          name: 'English (United States)',
          code: 'en-US',
          "default": '1',
          active: '1',
          enabled: '1'
        },
        model: {
          type: 'model',
          zuid: '6-0888e8-0rv8xh',
          name: 'customer_brands',
          label: 'Customers',
          resourceURI: 'https://www.zesty.io/-/instant/6-0888e8-0rv8xh.json'
        }
      }
    }, {
      customer_name: 'Petdesk-homepage',
      customer_logo: {
        type: 'images',
        totalItems: 1,
        data: [{
          type: 'image',
          zuid: '3-d959aed-tvdkr1',
          url: 'https://kfg6bckb.media.zestyio.com/Petdesk-homepage150x50-fullcolor.png'
        }]
      },
      homepage_sort: '1',
      background_image: null,
      customer_story_download: null,
      customer_story_short: null,
      products_in_use: null,
      customer_story_short_raw: null,
      featured: '1',
      customer_sort: '1',
      url: null,
      grey_logo: {
        type: 'images',
        totalItems: 1,
        data: [{
          type: 'image',
          zuid: '3-d959aed-dqbvjd',
          url: 'https://kfg6bckb.media.zestyio.com/Petdesk-homepage150x50-grey.png'
        }]
      },
      white_logo: null,
      meta: {
        type: 'item',
        model_name: 'customer_brands',
        model_alternate_name: 'CustomerBrand',
        zuid: '7-9ef497ad9d-h232d8',
        createdAt: '2022-03-22 19:52:46',
        updatedAt: '2022-03-22 19:52:45',
        listed: '1',
        version: '3',
        locale: {
          id: '1',
          name: 'English (United States)',
          code: 'en-US',
          "default": '1',
          active: '1',
          enabled: '1'
        },
        model: {
          type: 'model',
          zuid: '6-0888e8-0rv8xh',
          name: 'customer_brands',
          label: 'Customers',
          resourceURI: 'https://www.zesty.io/-/instant/6-0888e8-0rv8xh.json'
        }
      }
    }, {
      customer_name: 'Acorns-homepage',
      customer_logo: {
        type: 'images',
        totalItems: 1,
        data: [{
          type: 'image',
          zuid: '3-d959aa9-f62xz4',
          url: 'https://kfg6bckb.media.zestyio.com/Acorns-homepage150x50-fullcolor.png'
        }]
      },
      homepage_sort: '1',
      background_image: null,
      customer_story_download: null,
      customer_story_short: null,
      products_in_use: null,
      customer_story_short_raw: null,
      featured: '1',
      customer_sort: '1',
      url: null,
      grey_logo: {
        type: 'images',
        totalItems: 1,
        data: [{
          type: 'image',
          zuid: '3-d959aa9-0hm1ww',
          url: 'https://kfg6bckb.media.zestyio.com/Acorns-homepage150x50-grey.png'
        }]
      },
      white_logo: {
        type: 'images',
        totalItems: 1,
        data: [{
          type: 'image',
          zuid: '3-d95a49c-6ks7n7',
          url: 'https://kfg6bckb.media.zestyio.com/acorns-white.png'
        }]
      },
      meta: {
        type: 'item',
        model_name: 'customer_brands',
        model_alternate_name: 'CustomerBrand',
        zuid: '7-e2a8fcd0d0-pr31xg',
        createdAt: '2022-03-22 20:33:36',
        updatedAt: '2022-03-22 20:33:36',
        listed: '1',
        version: '3',
        locale: {
          id: '1',
          name: 'English (United States)',
          code: 'en-US',
          "default": '1',
          active: '1',
          enabled: '1'
        },
        model: {
          type: 'model',
          zuid: '6-0888e8-0rv8xh',
          name: 'customer_brands',
          label: 'Customers',
          resourceURI: 'https://www.zesty.io/-/instant/6-0888e8-0rv8xh.json'
        }
      }
    }]
  },
  meta: {
    type: 'item',
    model_name: 'integrations_individual_pages',
    model_alternate_name: 'IntegrationsIndividualPage',
    zuid: '7-d48acf90e9-pchhtq',
    createdAt: '2022-04-06 17:43:27',
    updatedAt: '2022-04-06 17:43:27',
    listed: '1',
    version: '2',
    locale: {
      id: '1',
      name: 'English (United States)',
      code: 'en-US',
      "default": '1',
      active: '1',
      enabled: '1'
    },
    model: {
      type: 'model',
      zuid: '6-88e5918e85-tmg13p',
      name: 'integrations_individual_pages',
      label: 'Integrations-Individual Pages',
      resourceURI: 'https://www.zesty.io/-/instant/6-88e5918e85-tmg13p.json'
    },
    web: {
      url: 'https://www.zesty.io/integrations/nextjs-cms/',
      uri: '/integrations/nextjs-cms/',
      fragment: 'nextjs-cms',
      canonical_tag_mode: '1',
      sitemap_priority: '-1.0',
      sitemap_last_updated: '2022-04-06 17:43:27',
      canonical_query_param_whitelist: null,
      canonical_tag_custom_value: null,
      seo_link_text: 'Integrate Next.JS seamlessly',
      seo_meta_title: 'Integrate Next.JS seamlessly',
      seo_meta_description: '',
      seo_meta_keywords: null
    }
  },
  zestyProductionMode: true,
  zestyInstanceZUID: '8-aaeffee09b-7w6v22',
  zestyBaseURL: 'https://www.zesty.io'
};

var convertToArray = function convertToArray(content) {
  return Object.entries(content).map(function (e) {
    var _ref;

    return _ref = {}, _ref["" + e[0]] = e[1], _ref;
  });
}; // convert obj to dot


var flattenObj = function flattenObj(obj, parent, res) {
  if (res === void 0) {
    res = {};
  }

  for (var _iterator = _createForOfIteratorHelperLoose(Object == null ? void 0 : Object.keys(obj || {})), _step; !(_step = _iterator()).done;) {
    var key = _step.value;
    var propName = parent ? parent + '.' + key : key;

    if (typeof obj[key] === 'object') {
      flattenObj(obj[key], propName, res);
    } else {
      res[propName] = obj[key];
    }
  }

  return res;
}; // convert dot to object


function deepen(obj) {
  var result = {}; // For each object path (property key) in the object

  for (var objectPath in obj) {
    // Split path into component parts
    var parts = objectPath.split('.'); // Create sub-objects along path as needed

    var target = result;

    while (parts.length > 1) {
      var part = parts.shift();
      target = target[part] = target[part] || {};
    } // Set value at end of path


    target[parts[0]] = obj[objectPath];
  }

  return result;
} // renanme content to contentData


var ZestyExplorerBrowser = function ZestyExplorerBrowser(_ref2) {
  var _result$, _result$$matches;

  var contentData = _ref2.contentData,
      children = _ref2.children;
  var content = contentData || dummydata; // const [modal, setModal] = React.useState(false);

  var _React$useState = React.useState(),
      search = _React$useState[0],
      setSearch = _React$useState[1]; // convert obj to dot
  // @ts-ignore


  var flaten1 = flattenObj(content); // convert to array of objects

  var flaten2 = convertToArray(flaten1); // generate columns for search

  var columns = flaten2.map(function (e) {
    var res = Object.keys(e);
    return res.toString().replace(/.[0-9]/g, '');
  }); // search options

  var options = {
    includeScore: true,
    useExtendedSearch: true,
    includeMatches: true,
    ignoreLocation: true,
    findAllMatches: true,
    threshold: 0,
    isCaseSensitive: false,
    minMatchCharLength: 1,
    keys: columns
  }; // search func

  var fuse = new Fuse([content], options);
  var result = fuse.search(search || ''); // convert as key value pairs

  var result2 = result && ((_result$ = result[0]) == null ? void 0 : (_result$$matches = _result$.matches) == null ? void 0 : _result$$matches.map(function (e) {
    var _ref3;

    return _ref3 = {}, _ref3["" + e.key] = e.value, _ref3;
  }).map(function (e) {
    return deepen(e);
  })); // display the result of search

  var data = search ? result2 : {
    content: content
  }; // let divStyles = {
  //   marginBottom: '4em',
  //   justifyContent: 'center',
  // };

  var searchBarStyles = {
    padding: '5px',
    margin: '10px',
    borderRadius: '28px'
  };
  var linkStyles = {
    padding: '5px',
    display: 'inline-block',
    color: '#497edf'
  };
  return React.createElement("div", {
    style: {
      background: '#ddd',
      boxShadow: '0,0,5px,#333',
      borderRadius: '4px'
    }
  }, React.createElement("div", {
    style: {
      width: '80vw',
      margin: '0 auto'
    }
  }, React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-evenly'
    }
  }, React.createElement("img", {
    src: "https://storage.googleapis.com/brand-assets.zesty.io/zesty-io-app-icon-transparent.png",
    width: "22px",
    height: "22px",
    alt: "Zesty.io Logo"
  }), React.createElement("input", {
    type: "text",
    placeholder: "Search Content Values",
    value: search,
    onChange: function onChange(e) {
      return setSearch(e.target.value);
    },
    autoFocus: true,
    style: searchBarStyles
  }), React.createElement("span", null, "Browsing item ", React.createElement("strong", null, " ", content.meta.web.seo_link_text, " "), "from the ", React.createElement("strong", null, content.meta.model_alternate_name, " "), "Content Model"), React.createElement("a", {
    style: linkStyles,
    target: "_blank",
    href: "https://accounts.zesty.io/instances/" + content.zestyInstanceZUID
  }, "Open Zesty Account"), React.createElement("a", {
    style: linkStyles,
    target: "_blank",
    href: "https://" + content.zestyInstanceZUID + ".manager.zesty.io/content/" + content.meta.model.zuid + "/" + content.meta.zuid
  }, "Open Zesty Manager"), React.createElement("a", {
    style: linkStyles,
    target: "_blank",
    href: "https://" + content.zestyInstanceZUID + ".manager.zesty.io/schema/" + content.meta.model.zuid
  }, "Open Schema"), children), React.createElement(ReactJson, {
    style: {
      height: '80vh',
      overflowY: 'scroll'
    },
    name: 'data',
    //@ts-ignore
    src: data,
    theme: "flat",
    iconStyle: "square",
    indentWidth: 4,
    collapsed: false,
    displayObjectSize: true,
    displayDataTypes: false,
    enableClipboard: true
  })));
};

function canUseDOM() {
  return !!(typeof window !== 'undefined' && window.document && window.document.createElement);
}

var ZestyExplorer = function ZestyExplorer(_ref4) {
  var content = _ref4.content;
  console.log('***********ZESTY EXPLORER LOADED *************');

  var _React$useState2 = React.useState(false),
      open = _React$useState2[0],
      setOpen = _React$useState2[1];

  var searchObject = _extends({}, content); // unset navigations for faster search


  delete searchObject.navigationTree; // custom nav tree building

  delete searchObject.navigationCustom;
  var buttonStyles = {
    borderRadius: '5px',
    padding: '12px 24px 12px 16px',
    background: '#1b202c',
    color: 'white',
    border: '1px #5B667D solid',
    boxShadow: '3px 3px 8px rgba(0,0,0,.5)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    cursor: 'pointer'
  };
  var zestyStyles = {
    flex: '1',
    display: 'inline-block',
    alignSelf: 'center',
    marginLeft: '12px',
    fontSize: '18px',
    color: '#C7D4EA',
    letterSpacing: '1px',
    fontFamily: "'Arial Rounded MT Bold','Helvetica Rounded',Arial,sans-serif"
  };

  if (!canUseDOM()) {
    return null;
  }

  return React.createElement("div", {
    style: {
      overflow: 'hidden',
      width: 'auto',
      background: 'transparent',
      position: 'fixed',
      bottom: '20px',
      right: '20px',
      zIndex: '9999999999999999',
      padding: '2rem'
    }
  }, !open && React.createElement("button", {
    type: "button",
    onClick: function onClick() {
      return setOpen(true);
    },
    style: buttonStyles
  }, React.createElement("img", {
    src: "https://storage.googleapis.com/brand-assets.zesty.io/zesty-io-app-icon-transparent.png",
    width: "32px",
    height: "32px",
    alt: "Zesty.io Logo"
  }), React.createElement("span", {
    style: zestyStyles
  }, "Explorer")), open && React.createElement("div", null, React.createElement(ZestyExplorerBrowser, {
    contentData: searchObject
  }, React.createElement("button", {
    onClick: function onClick() {
      return setOpen(false);
    }
  }, "Close"))));
};

export { ZestyExplorer };
//# sourceMappingURL=zesty-explorer.esm.js.map
