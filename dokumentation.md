# Dokumentation for Din Mægler

Brian Emilius, WU11

Jeg har valgt at lægge min opgave på nettet. Se den her:

[https://briansmaegler.onrender.com](https://briansmaegler.onrender.com)

Brugere til systemet:

| username | password |
|-|-|
| Niger | 1234 |

## Tech-stack
* **NextJS**
Jeg har vælgt at bruge NextJS fordi,  

 - Lav både frontend og backend i samme projekt  
 - Ingen behov for ekstra routing – oprette bare en fil i pages/, og den bliver automatisk en side.
 - Next.js optimerer vores sider automatisk, så de loader hurtigt.
 - Hurtig udvikling med Fast Refresh, så vi ser ændringer med det samme.
 - Kan nemt hostes på Vercel, Netlify eller egen server.
 - kort sagt, Hurtigere, nemmere og bedre for SEO – perfekt til moderne webudvikling.
* [**TailwindCSS**](https:,//tailwindcss.com/)

Jeg bruger TailwindCSS fordi ...
- Ingen behov for at skrive lange CSS-filer – vi kan styler direkte i HTML med utility-klasser.For eksample..

```js
- <button className="bg-blue-500 text-white px-4 py-2 rounded-md">Klik mig</button>
 
```
- jeg troa det mindre kode og bedre struktur.


### Kode-eksempel
Jeg har valgt et eksempel fra ...

[Login action](/src/actions/userLoginAction.js)
```js
export async function userLoginAction(state, formData) {
  const { username, password } = Object.fromEntries(formData);
  const cookieStore = await cookies();

  // I have copyed this zod code from Din maegler project just changed token key and form input name.

  const schema = z.object({
    username: z.string().min(1, { message: "This fiels is requred" }),
    password: z
      .string()
      .min(4, { message: "Password must be at least 4 characters long" }),
  });

  const result = schema.safeParse({ username, password });

  if (!result.success) return result.error.format();

  try {
    const response = await fetch("http://localhost:4000/auth/token", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        username,
        password,
      }),
    });

    const data = await response.json();

    console.log(data);

    cookieStore.set("landrup_token", data.token);
    cookieStore.set("landrup_userid", data.userId);
    cookieStore.set("landrup_role", data.role);
    return { success: true };
    
  } catch (error) {
    throw new Error(error);
  }
}
```

Jeg bruger biblioteket `Zod` til at lave et schema, så jeg kan validere email og password fra login-formularen.

Først laver jeg et skema som indeholder reglerne for hvordan felterne i formularen skal se ud.  
Derefter parser jeg et objekt med felterne fra formularen op mod schemaet.  
Hvis valideringen ikke lykkes returnerer funktionen et fejl-objekt.

### Kode-eksempel
Jeg har valgt anden kode eksempel fra 

```js
export default function TidmeldButton({ activityId }) {
  async function handleTilmeldButton() {
 
    const token = getCookie("landrup_token");
    const userId = getCookie("landrup_userid");

    if (!token || !userId) {
      redirect("/login");
    }

    let isTilmeldtDone = false;
    try {
      const response = fetch(
        `http://localhost:4000/api/v1/users/${userId}/activities/${activityId}`,
        {
          method: "POST",
          headers: {
            Authorization: "Bearer " + token,
            "content-type": "application/json",
          },
        }
      );

      if (response.status === 200) 
        isTilmeldtDone = true;
    } catch (e) {
      console.log(e);
    }

    if (isTilmeldtDone) {
      redirect("/activitier" + activityId);
    }
  }

  return (
    <>
      <div
        onClick={handleTilmeldButton}
        className="pl-[5em] absolute bottom-[2em] left-[2em]"
      >
        <Button text={"Tilmeld"} />
      </div>
    </>
  );
}
```

i den her kode, vil jeg gerne tilmeldt activity til user. så henter jeg token og userLoginAction.js file fra Action.
bruger må ikke tilmeld til activity hvis bruger har ikke logged ind bruger skal redirect til login side. Bagefter jeg fetcher fra API med userID og user activities ID til POST method. Efter jeg checker hvis response er OK, bruger kan godt tilmeld activity.




## Vurdering af egen indsats og gennemførelse 

* **Hvad gik godt**
- Hente data fra API var nemt
- laver map() og viser activitier var nemt,
- laver søg function i input field
* **Hvad gik skidt**
- Løsning af komplekse problemer fx-tilmeld bruger til activity
- render.com var svært
- 
## Konklusion
Projektet har været en god læring, hvor jeg er blevet bedre til Next.js, React og Tailwind CSS. Jeg har også fået erfaring med moderne webudvikling. 
