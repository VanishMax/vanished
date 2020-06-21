const ThisBlog = {
  slug: 'yet-another-blog',
  title: 'Yet another blog?!',
  cover: 'another-blog.jpg',
  date: 'June 20, 2020',
  lead: 'Decision behind personal blog and technologies used',
  keywords: 'blog, sapper, svelte, javascript',
  next: {slug: '', title: ''},
  prev: {slug: '', title: ''},
  contents: {
    "time" : 1592662887214,
    "blocks" : [
      {
        "type" : "header",
        "data" : {
          "text" : "Why?",
          "level" : 2
        }
      },
      {
        "type" : "paragraph",
        "data" : {
          "text" : "Yet another blog by yet another programmer. It is true, there are many developers writing about their experience in the field of front-end dev. Just take a look at very well-known blogs by <a href=\"https://overreacted.io/\" target='_blank'>Dan Abramov</a> or <a href=\"https://www.swyx.io/\" target='_blank'>Shawn Wang</a>. They preserve their identity by creating personal websites instead of posting to Medium or Dev. Yes, these guys at least had some popularity at the time of blog creation, but I just feel like starting from scratch."
        }
      },
      {
        "type" : "paragraph",
        "data" : {
          "text" : "The blog website can also serve you as portfolio \"Just look at him using modern technologies and implementing nice design to shout out!\" And CV is at the same place. Why not hire this person?"
        }
      },
      {
        "type" : "image",
        "data" : {
          "file" : {
            "url" : "https://images.unsplash.com/photo-1586281380349-632531db7ed4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
            "width" : 1950,
            "height" : 1300
          },
          "caption" : "Image from Unsplash",
          "withBorder" : false,
          "stretched" : false,
          "withBackground" : false
        }
      },
      {
        "type" : "header",
        "data" : {
          "text" : "Technologies",
          "level" : 2
        }
      },
      {
        "type" : "paragraph",
        "data" : {
          "text" : "Personal website as any pet-project requires your free time which a developer with constant employment and university studies never has. That's why I wanted to use technologies that I know well and can develop and deploy at the speed of light. Count the time taken, captain!"
        }
      },
      {
        "type" : "paragraph",
        "data" : {
          "text" : "Let's list what did I choose:"
        }
      },
      {
        "type" : "list",
        "data" : {
          "style" : "unordered",
          "items" : [
            "Sapper (Svelte)",
            "Neumorphic design",
            "Vercel",
            "Editor.js"
          ]
        }
      },
      {
        "type" : "paragraph",
        "data" : {
          "text" : "By the way, have you ever thought about how front-end devs love to talk about frameworks, libraries and other stuff? And how they can argue between choosing them? We don't brag about projects we take, only technologies. It might be sad, but can be easily spared for the next article."
        }
      },
      {
        "type" : "paragraph",
        "data" : {
          "text" : "Ok, sorry for stepping away from the main topic for a moment."
        }
      },
      {
        "type" : "delimiter",
        "data" : {}
      },
      {
        "type" : "paragraph",
        "data" : {
          "text" : "<b>Sapper </b>is an amazing framework built on top of Svelte – a <i>compiler</i> that makes your applications truly reactive and fast. Sapper adds SSR with Code-splitting making it even better. Also, such application can be exported as raw html files to be hosted on the services like Vercel, Netlify, etc."
        }
      },
      {
        "type" : "paragraph",
        "data" : {
          "text" : "I've taken plain Sapper template and didn't change anything from configuration. You can also update logos, basic styles and begin writing in <code class=\"inline-code\">.svelte</code> files valid html and js code. Front-end development has never been simpler."
        }
      },
      {
        "type" : "paragraph",
        "data" : {
          "text" : "<b>Neumorphism</b>&nbsp;is a recent trend that was born from Apple's design standards in late 00's, but we are here not to talk about history. When I firstly seen the real mockups and real usage cases, I decided: it has to be tried. Here we are, on the website with amazing soft shadows which make it look inserted into the page. Colors and fonts made the website complete."
        }
      },
      {
        "type" : "paragraph",
        "data" : {
          "text" : "<b>Vercel</b> (previously called Now by Zeit) is a platform for <i>serverless deployment</i>. With its CLI tools you can perform one command and in ten seconds already see the result. "
        }
      },
      {
        "type" : "paragraph",
        "data" : {
          "text" : "I, though, recommend you to publish all projects to <b>GitHub</b> and connect them with Vercel for Continuous Deployment (CD). Any push-event will cause a publish and will inform you in case of failure."
        }
      },
      {
        "type" : "paragraph",
        "data" : {
          "text" : "<b>Editor.js</b> is a web-editor from a dream. Well, there are quite many solutions like Medium editor or Draft.js, but they are either for React or just not easy enough. My options is also not without flaws: it does not support SSR, which is horribly bad for articles, but..! It is only if you decide to built and Editor into you website."
        }
      },
      {
        "type" : "paragraph",
        "data" : {
          "text" : "My need is just to write the text that I can later insert into the page. Previously, WYSIWYG editors with html-export were very popular, but times has changed the perspective for block-type ones. For example, the result of what I have written before is:"
        }
      },
      {
        "type" : "code",
        "data" : {
          "code" : "{\n    \"time\" : 1592662194299,\n    \"blocks\" : [\n        {\n            \"type\" : \"paragraph\",\n            \"data\" : {\n                \"text\" : \"Yet another blog by yet another programmer...\"\n            }\n        },\n    ]\n}"
        }
      },
      {
        "type" : "paragraph",
        "data" : {
          "text" : "What I do with that: copy to my <code class=\"inline-code\">some-article.js</code> file and&nbsp;iterate though all the blocks by creating some markup for which I later add some CSS and make it look good. So, SSR support is native."
        }
      },
      {
        "type" : "paragraph",
        "data" : {
          "text" : "You can read about everything listed before in here: <a href=\"https://dev.to/vintharas/discovering-svelte-3ih9\" target='_blank'>Svelte</a>, <a href=\"https://sapper.svelte.dev/\" target='_blank'>Sapper</a>, <a href=\"https://vercel.com/guides/deploying-svelte-with-vercel\" target='_blank'>Vercel</a>, <a href=\"https://css-tricks.com/neumorphism-and-css/\" target='_blank'>Neumorphic design</a>, <a href=\"https://editorjs.io/\" target='_blank'>Editor.js</a>."
        }
      },
      {
        "type" : "paragraph",
        "data" : {
          "text" : "As you can see, everything about this website is simple, but it was never meant to be something massive to perform over-complicated logic. By the way, all the code is waiting for curious eyes in this <a href=\"https://github.com/VanishMax/vanished\" target='_blank'>GitHub repo</a>."
        }
      },
      {
        "type" : "delimiter",
        "data" : {}
      },
      {
        "type" : "paragraph",
        "data" : {
          "text" : "Thanks for reading! Hope it was a bit useful and I brought some insights into the reader's mind."
        }
      },
      {
        "type" : "paragraph",
        "data" : {
          "text" : "Also, feel free to text me in <a href=\"https://t.me/vanishmax\" target='_blank'>Telegram</a> if you have any questions, and subscribe for <a href=\"https://twitter.com/vanish_max\" target='_blank'>Twitter</a>. Make this front-end developer pleased 😊"
        }
      }
    ],
    "version" : "2.18.0"
  },
};

export default ThisBlog;
