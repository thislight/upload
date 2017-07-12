import {extend} from "flarum/extend";
import Post from 'flarum/components/Post';

export default function () {
    extend(Post.prototype, 'config', function (isInitialized) {
        if (isInitialized) return;

        this.$('.flagrow-download').each((i, elm) => {
            let url = app.forum.attribute('apiUrl') + '/flagrow/download';

            url += '/' + $(elm).attr('data-uuid');
            url += '/' + this.props.post.id();
            url += '/' + app.session.csrfToken;
            url += '/embed';

            console.log(url)

            $(elm).find('.wrapper').css('background-image', 'url(' + url + ')');
        })

        this.$('.flagrow-download-button[data-uuid]').unbind('click').on('click', (e) => {
            e.preventDefault();
            e.stopPropagation();

            let url = app.forum.attribute('apiUrl') + '/flagrow/download';

            url += '/' + $(e.currentTarget).parents('.flagrow-download').attr('data-uuid');
            url += '/' + this.props.post.id();
            url += '/' + app.session.csrfToken;

            window.open(url);
        })
    })
}
