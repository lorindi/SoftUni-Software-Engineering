function attachEvents() {
    document.getElementById('btnLoadPosts').addEventListener('click', loadPosts);
    document.getElementById('btnViewPost').addEventListener('click', viewPosts);

    const posts = [];
    async function loadPosts() {
        try {
            const url = `http://localhost:3030/jsonstore/blog/posts`;
            const res = await fetch(url);
            if(!res.ok) throw new Error();

            const data = await res.json();
            document.getElementById('posts').innerHTML = '';

            Object.entries(data).forEach(([key, value]) => {
                const optionElement = document.createElement('option');
                optionElement.value = key;
                optionElement.textContent = value.title;
                document.getElementById('posts').appendChild(optionElement);
                posts.push({title: value.title, body: value.body})
            })

        } catch (e) {
            console.log(e);
        }

    }

    async function viewPosts() {
        try {
            const selectElement = document.getElementById('posts');
            const url = `http://localhost:3030/jsonstore/blog/comments`;
            const res = await fetch(url);
            if (!res.ok) throw new Error();

            const data = await res.json();
            const comments = Object.values(data).filter(el => el.postId === selectElement.value);

            document.getElementById('post-title').textContent = selectElement.selectedOptions[0].textContent;
            const po = posts.filter(p => p.title === selectElement.selectedOptions[0].textContent);
            document.getElementById('post-body').innerHTML = `${po[0].body}`;
            document.getElementById('post-comments').innerHTML = '';

            comments.forEach(el => {
                const liElement = document.createElement('li');
                liElement.textContent = el.text;
                document.getElementById('post-comments').appendChild(liElement);
            })
        } catch (e) {
            console.log(e);
        }
    }
}

attachEvents();