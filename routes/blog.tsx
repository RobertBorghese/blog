import { PropsWithChildren } from "react";
import { MDXProvider } from "@mdx-js/react";
import { Head, NavLink, Link } from "aleph/react";
import { components } from "../components/Heading.tsx";
import Comments from "../components/Comments.tsx";

// Navagation
const nav = [
  "baselist",
  ["About", "/blog"],
  ["Reflaxe", "/blog/reflaxe"],
  ["Reflaxe/C++", "/blog/reflaxe-cpp"],
  ["reflaxecpp", ["CallStack", "/blog/reflaxe-cpp/1", "1"]],
];

// Calculate order of blogs
const order = [];

{
  function _makeOrder(item) {
    if (Array.isArray(item) && item.length >= 2) {
      if (typeof item[1] === "string") {
        order.push(item[1]);
      } else if (Array.isArray(item[1])) {
        item.slice(1).map(_makeOrder);
      }
    }
  }

  nav.map(_makeOrder);
}

// Helper for toggling a class on an element
function toggleClass(element, clsName) {
  if (element.classList.contains(clsName)) {
    element.classList.remove(clsName);
  } else {
    element.classList.add(clsName);
  }
}

// On sidebar toggled, add or remove "hidden"
function toggleSidebar() {
  toggleClass(document.getElementById("sidebar"), "hidden");
  toggleClass(document.getElementsByClassName("asideHold")[0], "hidden");
  toggleClass(document.getElementsByClassName("asideButton")[0], "hidden");
  toggleClass(
    document.getElementsByClassName("markdown-body-holder")[0],
    "hidden"
  );
}

// Construct the navbar html
function genNav(item, index) {
  if (Array.isArray(item) && item.length >= 2) {
    if (typeof item[1] === "string") {
      const title = item[0];
      const href = item[1];
      return (
        <li key={href} data-num={"" + (index + 1)}>
          <NavLink to={href} activeClassName="active" exact>
            {title}
          </NavLink>
        </li>
      );
    } else if (Array.isArray(item[1])) {
      return <ul key={"" + item[0]}>{item.slice(1).map(genNav)}</ul>;
    }
  }
  throw "Impossible";
}

// <Blog />
export default function Blog(props: PropsWithChildren) {
  const hClass = window.innerWidth < 720 ? "hidden" : "";

  const pathname = document.location.pathname;
  const index = order.indexOf(pathname);

  let next = null;
  let previous = null;
  if (index >= 0) {
    const nextIndex = index + 1;
    const prevIndex = index - 1;
    if (nextIndex >= 0 && nextIndex < order.length) {
      next = order[nextIndex];
    }
    if (prevIndex >= 0 && prevIndex < order.length) {
      previous = order[prevIndex];
    }
  }

  return (
    <>
      <Head>
        <meta content="Reflaxe/C++ Devlog 1" property="og:title" />
        <meta
          content="CallStack - Diving into the simple process of implementing `haxe.CallStack` for a custom Haxe target."
          property="og:description"
        />
      </Head>
      <div className="docs">
        <div className={"asideHold " + hClass}>
          <button className={"asideButton " + hClass} onClick={toggleSidebar}>
            <svg
              width="30px"
              height="30px"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14 7L9 12L14 17"
                stroke="#000000"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          <aside id="sidebar" className={hClass}>
            <div className="search">
              <input placeholder="Search..." />
            </div>
            <nav>{genNav(nav)}</nav>
          </aside>
        </div>
        <div
          className={"markdown-body-holder " + hClass}
          style={{ flexDirection: "column" }}
        >
          <div className="markdown-body">
            <MDXProvider components={components}>{props.children}</MDXProvider>
          </div>
          <hr />
          <div className="index" style={{ flexDirection: "row" }}>
            <nav>
              {previous !== null ? (
                <Link role="button" to={previous}>
                  {"< Previous"}
                </Link>
              ) : (
                <></>
              )}
              <span style={{ margin: "auto" }}></span>
              {next !== null ? (
                <Link role="button" to={next}>
                  {"Next >"}
                </Link>
              ) : (
                <></>
              )}
            </nav>
          </div>
          <br />
          <Comments />
        </div>
      </div>
    </>
  );
}
