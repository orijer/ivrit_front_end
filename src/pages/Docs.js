import "./Docs.css"

import { useEffect } from "react";

const sections = [
    "docs-page-prints",
    "docs-page-variables",
    "docs-page-constants",
    "docs-page-input",
    "docs-page-conditions",
    "docs-page-loops",
    "docs-page-functions",
    "docs-page-lists"
];

function Docs() {

    useEffect(() => {
            const handleScroll = () => {
                let currentSectionId = null;
    
                for (const id of sections) {
                    const section = document.getElementById(id);
                    if (!section) continue;
    
                    const rect = section.getBoundingClientRect();
                    if (rect.top <= 120 && rect.bottom >= 120) {
                        currentSectionId = id;
                        break;
                    }
                }
    
                document.querySelectorAll('.nav-link').forEach((el) => {
                    el.classList.remove('active');
                });
    
                if (currentSectionId) {
                    const activeLink = document.querySelector(`a[href="#${currentSectionId}"]`);
                    if (activeLink) activeLink.classList.add('active');
                }
            };
    
            window.addEventListener('scroll', handleScroll);
            handleScroll(); // call once on load
    
            return () => window.removeEventListener('scroll', handleScroll);
        }, []);

    return (
        <div id="docs-page">
            <div className="container-fluid">
                <div className="row">

                    {/* Sidebar */}
                    <nav className="col-md-3 col-lg-2 d-none d-md-block sidebar">
                        <div style={{ position: 'sticky', top: '0px' }}>
                            <ul className="nav flex-column p-2">
                                <li className="nav-item">
                                    <a className="nav-link fw-bold" href="#docs-page-prints">הדפסות</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link fw-bold" href="#docs-page-variables">משתנים</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link fw-bold" href="#docs-page-constants">קבועים</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link fw-bold" href="#docs-page-input">קלט</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link fw-bold" href="#docs-page-conditions">תנאים</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link fw-bold" href="#docs-page-loops">לולאות</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link fw-bold" href="#docs-page-functions">פונקציות</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link fw-bold" href="#docs-page-lists">רשימות</a>
                                </li>
                            </ul>
                        </div>
                    </nav>

                    {/* Main Content */}
                    <main className="col-md-9 col-lg-10 px-md-4">
                        <section id="docs-page-prints">
                            <h1>הדפסות</h1>

                            <p className="mb-0">
                                כדי להדפיס צריך להשתמש במילה השמורה "הדפס". ניתן להדפיס גם ערכים וגם משתנים:
                            </p>

                            <div class="code-snippet">
                                הדפס 5 <br />
                                הדפס 13.72 <br />
                                הדפס "טקסט" <br />
                                הדפס אמת
                            </div>
                        </section>

                        <section id="docs-page-variables">
                            <h1>משתנים</h1>

                            <h4>יצירת משתנים</h4>

                            <p className="mb-0">
                                בשביל ליצור משתנה חדש משתמשים בסינטקס:
                            </p>

                            <div class="code-snippet">
                                משתנה טיפוס שם = ערך
                            </div>

                            <p className="mb-0">
                                כאשר טיפוס המשתנה הוא אחד מבין: שלם, עשרוני, משפט טענה. חשוב לשים לב ששם המשתנה לא יכול להכיל רווחים. <br />
                                שלם הוא Integer, עשרוני הוא Float, משפט הוא String, טענה היא Boolean. <br />
                                דוגמאות:
                            </p>

                            <div class="code-snippet">
                                # יצירת המשתנים: <br />
                                משתנה שלם מ_שלם = 5 <br />
                                משתנה עשרוני מ_עשרוני = 13.72 <br />
                                משתנה משפט מ_משפט = "משפט" <br />
                                משתנה טענה מ_טענה = אמת <br />
                                <br />
                                # הדפסות: <br />
                                הדפס מ_שלם <br />
                                הדפס מ_עשרוני <br />
                                הדפס מ_משפט <br />
                                הדפס מ_טענה
                            </div>

                            <p>
                                השמות של המשתנים צריכים להיות ייחודיים אלא אם כן מדובר על משתנה של פונקציה.
                            </p>

                            <h4>שינוי ערך של משתנה</h4>

                            <p className="mb-0">
                                בשביל לשנות ערך של משתנה קיים משתמשים בהשמה, כמו רוב שפות התכנות:
                            </p>

                            <div class="code-snippet">
                                משתנה שלם מ = 5 <br />
                                הדפס מ <br />
                                מ = 10 <br />
                                הדפס מ <br />
                                # עכשיו הודפס 10 <br />
                                מ = (מ + 5) * 2 <br />
                                הדפס מ <br />
                                # עכשיו יודפס 20 <br />
                                # חשוב לשים סוגריים בחישובים מורכבים כדי לקבל את התוצאה הנכונה
                            </div>

                            <p className="pt-5 mb-5">
                                הפעולות האפשריות על מספרים הן +, -, *, /, %. הפעולה האפשרית היחידה על משפטים היא + (שרשור). הפעולות האפשריות היחידות על טענות הן "או", "וגם".
                            </p>

                            <h4>מחיקת משתנים</h4>

                            <p className="mb-0">
                                כדי למחוק משתנה קיים צריך להשתמש במילה השמורה "מחק", כך:
                            </p>

                            <div class="code-snippet">
                                משתנה שלם מ = 5 <br />
                                הדפס מ <br />
                                מחק מ <br />
                                # עכשיו ניתן להגדיר משתנה חדש בשם מ מטיפוס אחר.
                            </div>
                        </section>

                        <section id="docs-page-constants">
                            <h1>קבועים</h1>

                            <p className="mb-0">
                                ניתן גם להגדיר קבועים שלא ניתנים לשינוי בעזרת המילה השמורה "קבוע", בצורה דומה מאוד להגדרת משתנה:
                            </p>

                            <div class="code-snippet">
                                קבוע שלם ק_שלם = 5 <br />
                                הדפס ק_שלם <br />
                                # לא ניתן לשנות את ערכו
                            </div>
                        </section>

                        <section id="docs-page-input">
                            <h1>קלט</h1>

                            <p className="mb-0">
                                כדי לקבל מהמשתמש קלט ולשים אותו בתוך משתנה קיים משתמשים במילה השמורה "קלוט-ל", כך:
                            </p>

                            <div class="code-snippet">
                                משתנה שלם מ = 0 <br />
                                קלוט-ל מ <br />
                                הדפס מ < br />
                                # הערך ההתחלתי של מ (במקרה הזה 0) לא משנה פה כי אנחנו ישר דורסים אותו
                            </div>
                        </section>

                        <section id="docs-page-conditions">
                            <h1>תנאים</h1>

                            <p className="mb-0">
                                כדי לבצע תנאים משתמשים בסינטקס הבא:
                            </p>

                            <div class="code-snippet">
                                אם (תנאי) <br />
                                קוד שיתבצע אם התנאי מתקיים <br />
                                אחרת <br />
                                קוד שיתבצע אם התנאי לא מתקיים <br />
                                סוף <br />
                                # המשך הקוד אם ישנו
                            </div>

                            <p>
                                ניתן להשאיר את קטע הקוד של "אחרת" ריק, ואז לא יתבצע קוד מיוחד במקרה שהתנאי לא מתקיים. באותו אופן ניתן להשאיר את קטע הקוד של "אם" ריק, ואז לא יתבצע קוד מיוחד במקרה שהתנאי כן מתקיים. <br />
                            </p>

                            <p className="mb-0">
                                התנאי צריך להיות אחד מבין:
                            </p>

                            <ul>
                                <li>אמת\שקר.</li>
                                <li>משתנה מסוג טענה</li>
                                <li>ערך\משתנה מספריים &gt; ערך\משתנה מספריים.</li>
                                <li>ערך\משתנה מספריים &lt; ערך\משתנה מספריים.</li>
                                <li>ערך\משתנה שווה ערך\משתנה.</li>
                                <li>ערך\משתנה לא-שווה ערך\משתנה.</li>
                                <li>שני ביטויים מסוג טענה שביניהם יש וגם.</li>
                                <li>שני ביטויים מסוג טענה שביניהם יש או.</li>
                            </ul>
                        </section>

                        <section id="docs-page-loops">
                            <h1>לולאות</h1>

                            <p className="mb-0">
                                כדי לבצע לולאות משתמשים במבנה:
                            </p>

                            <div class="code-snippet">
                                כל עוד (תנאי)
                                קוד
                                סוף
                            </div>

                            <p>
                                תנאי צריך להיתו במבנה זהה לתנאי ב "אם", קטע הקוד יכול להכיל כמה שורות שנרצה. <br /> <br />
                                ניתן לבצע לולאות\תנאים מקוננים ככל שנרצה, אך חשוב לשים לב לכתוב את שורת "סוף" במקומות המתאימים.
                            </p>
                        </section>

                        <section id="docs-page-functions">
                            <h1>פונקציות</h1>

                            <p className="mb-0">
                                שימוש בפונקציות ללא פרמטרים מתבצע כך:
                            </p>

                            <div class="code-snippet">
                                # תחילת הקוד <br />
                                הפעל שם_הפונקציה <br />
                                צא <br />
                                # חשוב שנצא לפני שהגדרות הפונקציות מופיעות במסמך <br />
                                < br />
                                פונקציה שם_הפונקציה מקבלת כלום מחזירה כלום <br />
                                קוד הפונקציה <br />
                                תחזיר
                            </div>

                            <p>
                                המילה תחזיר מסמנת מתי להפסיק להריץ את קוד הפונקציה ולחזור לשורה הקוראת. <br /> <br />
                                פונקציות יכולות לגשת למשתנים חיצוניים, ואפילו ליצור משתנים חדשים בתוכן. חשוב לשים לב שכל משתנה שנוצר בתוך הפונקציה ימחק בסופה, ולכן כדי להחזיר ערך מתוך פונקציה צריך תחילה להגדיר משתנה לפני הקריאה אליה, ולשים את הערך בו. <br /> <br />
                                דבר נוסף שחשוב לשים לב אליו הוא שאם כבר קיים משתנה בשם מסויים מחוץ לפונקציה, ניתן להגדיר משתנה חדש בתוך הפונקציה עם אותו שם, אבל כל גישה למשתנה עם השם הזה בתוך הפונקציה תשתמש למעשה במשתנה המקומי שהוגדר.
                            </p>

                            <p className="mb-0">
                                שימוש בפונקציה עם פרמטרים מתבצע כך:
                            </p>

                            <div class="code-snippet">
                                # תחילת הקוד <br />
                                הפעל שם_הפונקציה עם פרמטר1, פרמטר2, ... <br />
                                צא <br />
                                <br />
                                פונקציה שם_הפונקציה מקבלת טיפוס1 שם_ארגומנט1, טיפוס2 שם_ארגומנט2, ... מחזירה כלום <br />
                                קוד הפונקציה <br />
                                תחזיר
                            </div>

                            <p>
                                אין משמעות אמיתית לטיפוס ההחזרה בחתימת הפונקציה. נכון לעכשיו השימוש היחי שלו הוא לתזכר לקורא הקוד מה הפונקציה אמורה להחזיר.
                            </p>

                            <p>
                                רקורסיה אפשרית ונתמכת בשפה.
                            </p>
                        </section>

                        <section id="docs-page-lists">
                            <h1>רשימות</h1>

                            <p className="mb-0">
                                ניתן להגדיר משתנה מסוג רשימה עבור ארבעת הטיפוס הרגילים באופן הבא:
                            </p>

                            <div class="code-snippet">
                                משתנה רשימה טיפוס שם_המשתנה = [ערך1, ערך2, ...] <br />
                            </div>

                            <p>
                                ניתן להדפיס רשימות כמו כל משתנה רגיל. <br /> <br />
                                ניתן לגשת לאיבר ה-X ברשימה ב O(1) זמן, כך:
                            </p>

                            <div class="code-snippet">
                                משתנה רשימה טיפוס שם_הרשימה = [ערך1, ערך2, ...] <br />
                                משתנה טיפוס מ = שם_הרשימה במקום X <br />
                                הדפס מ <br />
                                שם_הרשימה במקום X = ערך_חדש
                            </div>

                            <p className="mb-0">
                                חשוב לשים לב שהמיקום הראשון ברשימה הוא 1, בניגוד לרוב שפות התכנות המקובלות בעולם. בנוסף, צריך לדאוג לא לחרוג מגבולות הרשימה.<br /> <br />
                                ניתן להוסיף ולהסיר איברים מרשימה בתחילתה, בסופה, ובכל מיקום בה, כך:
                            </p>

                            <div class="code-snippet">
                                משתנה רשימה טיפוס שם_הרשימה = [ערך1, ערך2, ...] <br />
                                # הוספה לרשימה: <br />
                                הוסף ערך_חדש לתחילת שם_הרשימה <br />
                                הוסף ערך_חדש לסוף שם_הרשימה <br />
                                הוסף ערך_חדש במקום X של שם_הרשימה <br />
                                <br />
                                # הסרה מרשימה: <br />
                                הסר מתחילת שם_הרשימה <br />
                                הסר מסוף שם_הרשימה <br />
                                הסר ממקום X של שם_הרשימה
                            </div>

                            <p>
                                הוספה במקום X מעבירה את האיבר הקודם במקום X ואת האיברים שאחריו מיקום אחד קדימה.
                            </p>
                        </section>
                    </main>
                </div>
            </div>
        </div>
    )
}

export default Docs;