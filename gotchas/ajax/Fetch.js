/** 
 * Fetch always returns a Response object regardless of whether or not it was successful. 
 * If your URL is wrong, fetch won't throw any errors UNLESS you check for them.
 */

const url = "https://google.com/asdbanjc"; // BAD URL

const handleErrors = (res) => {
  if (res.status !== 200) throw new Error(res.error);
  return res;
}

const goFetch = async url => {
  try {
    const res = await fetch(url)
    if (res.status === 200) { }             // you need this
    // const OK = await handleErrors(res)   // or this
  } catch { console.log(err) }              // else this is never reached
};