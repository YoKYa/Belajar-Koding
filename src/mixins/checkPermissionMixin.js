import store from "@/store";
import router from '@/router'

export default {
    created() {
        let { guardPermission } = this.$options
        const user = store.getters['auth/user']
        if (store.getters['auth/authenticated'] == true) {
            guardPermission = String(guardPermission)
            if (guardPermission == 'undefined') {
                //  console.log('uuuu')
            } else {
                let pass = false
                if (user.roles.length == 0) {
                    console.log('uwu');
                    router.push('/app/dashboard')
                } else {

                    user.roles.forEach(role => {
                        if (role.name == 'super admin') {
                            pass = true
                        } else {
                            role.permissions.forEach(permission => {
                                if (permission.name == guardPermission) {
                                    pass = true
                                }
                            })
                        }
                    })

                }
                if (pass == false) {
                    router.push('/app/admin')
                }

            }

        }
    }
}