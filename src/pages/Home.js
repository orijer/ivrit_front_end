import "./Home.css"

import { Link } from 'react-router-dom';

function Home() {
    return (
        <div id="home-page" className="w-100 m-0">
            <section className="hero">
                <h1 className="display-1 fw-semibold">ברוכים הבאים ל־lvrit!</h1>
                <p className="fs-3 fw-semibold">ללמוד תכנות בשפה טבעית וברורה – בעברית!</p>
                <Link to="/tutorial">
                    <button className="btn btn-primary btn-lg mt-3 mb-5 fs-2 fw-bold">התחילו ללמוד</button>
                </Link>

                <div className="row text-center mt-5">
                    <div className="col-md-4">
                        <h3 className="fs-2">🧠 קלה ללמידה</h3>
                        <p className="fs-4">שפה שמתאימה למתחילים מוחלטים</p>
                    </div>
                    <div className="col-md-4">
                        <h3 className="fs-2">🌍 בעברית מלאה</h3>
                        <p className="fs-4">כל התחביר וההדפסות נכתבים בעברית</p>
                    </div>
                    <div className="col-md-4">
                        <h3 className="fs-2">🛠 כלי לימוד אינטראקטיביים</h3>
                        <p className="fs-4">עורך קוד בדפדפן ותרגולים מיידיים</p>
                    </div>
                </div>
            </section>

            <section id="home-page-info" className="w-75 m-5">
                <h1 className="mt-5 pt-5">מה זה Ivrit?</h1>
                <p className="mb-0 fs-4">
                    אחד המחסומים העיקריים בלמידת תכנות בישראל הוא השימוש באנגלית. כיוון ששפות התכנות עצמן הן באנגלית, והתיעוד שלהן כתוב גם הוא באנגלית, רבים מהלומדים נאלצים לוותר כבר בשלבי הלמידה הראשונים. כדי להתמודד עם הבעיה הזו יצרתי את שפת Ivrit! <br />
                    Ivrit היא שפת תכנות שכולה בעברית, והיא תוכננה במיוחד כך שכולם יוכלו ללמוד אותה ולהשתמש בה, אפילו ללא ניסיון קודם בתכנות. <br /> <br /> <br />
                    השפה מכילה את כל הדברים הבסיסיים שיש בשפות תכנות מוכרות:
                </p>

                <ul className="fs-4 mb-5">
                    <li className="fs-4">משתנים</li>
                    <li className="fs-4">תנאים ולולאות</li>
                    <li className="fs-4">קלט\פלט</li>
                    <li className="fs-4">פונקציות ורקורסיה</li>
                </ul>

                <p className="fs-4 mb-5">תוכניות בשפה אפשר להריץ או באתר הזה- בעמוד העורך, או באמצעות תוכנה שניתן להוריד למחשב ישירות.</p>

                <h1>איך מתחילים?</h1>
                <p className="fs-4">
                    עבור מי שזו שפת התכנות הראשונה שלו, מומלץ להתחיל בעמוד המדריך. הוא מלמד איך לתכנת בשפה מאפס- בדיוק בשביל אלו ללא ניסיון קודם בתכנות. <br />
                    מי שכבר מנוסה בתכנות כנראה יעדיף לעבור על עמוד התיעוד, בו מפורט על תחביר השפה. <br /> <br />
                    בשני המקרים, מומלץ קודם להשתמש בעורך שבאתר, ורק לאחר שמתנסים איתו כדאי לשקול להוריד את כלי הפירוש שבעמוד ההורדה בשביל להריץ תוכניות ישירות על המחשב שלכם.
                </p>

            </section>
            
        </div>
    )
}

export default Home