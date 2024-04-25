import { router } from "../router";

export abstract class HtmlUtil {
  static render(rootDiv: HTMLElement | null) {
    if (!rootDiv) {
      throw Error("Missing root element!");
    }

    // on init
    const { pathname } = window.location;
    rootDiv.innerHTML = router[pathname];

    // List events
    HtmlUtil.addEventListeners(rootDiv);
  }

  private static addEventListeners(rootDiv: HTMLElement) {
    // capture elements
    const usersBtn: HTMLElement | null = document.getElementById("users");
    const postsBtn: HTMLElement | null = document.getElementById("posts");

    // attach events
    if (usersBtn) {
      usersBtn.addEventListener("click", () => {
        HtmlUtil.navigate(rootDiv, "/");
      });
    }

    if (postsBtn) {
      postsBtn.addEventListener("click", () => {
        HtmlUtil.navigate(rootDiv, "/post");
      });
    }
  }

  private static navigate(rootDiv: HTMLElement, pathname: string) {
    const { origin } = window.location;
    const url = `${origin}${pathname}`;

    // to change url
    window.history.pushState({}, pathname, url);

    // to render content
    rootDiv.innerHTML = router[pathname];
  }
}
