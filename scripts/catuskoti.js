function logHeader() {
  console.log(`======================================================`);
  console.log(`   AUM CATUṢKOṬI TEST ASSERTION ENGINE`);
  console.log(`======================================================`);
}

class CatuskotiAssert {
  static assertSat(value, message) {
    if (value === null || value === undefined) {
      throw new Error(`[ Catuṣkoṭi FAIL - Kotī 1 (Sat)]: Expected value to exist. ${message}`);
    }
    console.log(`  [ Catuṣkoṭi PASS - Kotī 1 (Sat) ]: Value exists cleanly.`);
  }

  static assertAsat(value, message) {
    if (value !== null && value !== undefined) {
      throw new Error(`[ Catuṣkoṭi FAIL - Kotī 2 (Asat)]: Expected value to be null/undefined. ${message}`);
    }
    console.log(`  [ Catuṣkoṭi PASS - Kotī 2 (Asat) ]: Value does not exist.`);
  }

  static assertUbhaya(hasCache, isFetching, message) {
    if (!hasCache || !isFetching) {
      throw new Error(`[ Catuṣkoṭi FAIL - Kotī 3 (Ubhaya)]: Expected value to exist and be fetching. ${message}`);
    }
    console.log(`  [ Catuṣkoṭi PASS - Kotī 3 (Ubhaya) ]: Value both exists and fetches.`);
  }

  static assertAnubhaya(isPending, isResolved, message) {
    if (isPending && isResolved) {
      throw new Error(`[ Catuṣkoṭi FAIL - Kotī 4 (Anubhaya)]: Value cannot be both pending and resolved. ${message}`);
    }
    console.log(`  [ Catuṣkoṭi PASS - Kotī 4 (Anubhaya) ]: Value is in lazy/pending state.`);
  }
}

function run() {
  logHeader();
  console.log(`[ Catuṣkoṭi Testing ]: Running tetralemma state assertions...`);
  
  CatuskotiAssert.assertSat("samskara_cache");
  CatuskotiAssert.assertAsat(null);
  CatuskotiAssert.assertUbhaya(true, true);
  CatuskotiAssert.assertAnubhaya(true, false);
  
  console.log(`\n[ CATUṢKOṬI ]: All tetralemma assertions passed.`);
  console.log(`======================================================`);
}

run();
