import style from "../styles/components/Profile.module.css";

export function Profile() {
    return (
        <div className={style.profileContainer}>
            <img src="https://avatars.githubusercontent.com/u/30558609?v=4" alt="Cyntia Santos" />
            <div>
                <strong>Cyntia Santos</strong>
                <p>
                <img src="icons/level.svg" alt="level"/>
                Level 1
                </p>
            </div>
        </div>
    );
}