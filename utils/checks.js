import { check } from 'k6';

export function validateResponse(res) {

  check(res, {
    'status é 200': (r) => r.status === 200,
    'tempo < 500ms': (r) => r.timings.duration < 500,
  });

}