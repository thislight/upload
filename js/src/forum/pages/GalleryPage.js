import UserPage from 'flarum/components/UserPage';
import listItems from 'flarum/helpers/listItems';
import ItemList from 'flarum/utils/ItemList';

export default class TagsPage extends UserPage
{
    init() {
        super.init();

        const username = m.route.param('username');

        if (username === app.session.user.username()) {
            this.show(app.session.user);
        } else {
            this.show(this.loadUser(username));
        }
    }

    content() {
        return (
            <div className="GalleryPage">
                <ul>{listItems(this.galleryItems().toArray())}</ul>
            </div>
        );
    }

    show(user) {
        this.user = user;

        app.setTitle(app.translator.trans('flagrow-upload.forum.gallery.app_title', {user.username()}));

        m.redraw();
    }

    galleryItems() {
        let items = new ItemList;

        return items;
    }
}