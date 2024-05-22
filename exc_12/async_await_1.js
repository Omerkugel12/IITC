async function pause(sleepMs) {
  try {
    console.log(new Date());
    const promise = new Promise((resolve, reject) => {
      setTimeout(() => resolve("Hello"), sleepMs);
    });
    const result = await promise;
    console.log(result);
    console.log(new Date());
  } catch (error) {}
}

pause(5000);
